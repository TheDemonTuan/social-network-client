"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { FaRegComments, FaShare } from "react-icons/fa";
import { GetPostResponse, PutLikePostBody, PutLikePostResponse, getPosts, putLikePost } from "@/api/post";
import { formatDistanceToNow } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiErrorResponse } from "@/lib/http";
import { getErrorMessage } from "@/lib/get-error-message";
import { toast } from "react-toastify";

const PostView = () => {
  const queryClient = useQueryClient();

  const {
    data: postsData,
    error: postsError,
    isError: postsIsError,
    isPending: postsIsPending,
    isLoading: postsIsLoading,
    isFetching: postsIsFetching,
    isRefetching: postsIsRefetching,
  } = useQuery<GetPostResponse[], ApiErrorResponse>({
    queryKey: ["post"],
    queryFn: async () => getPosts(),
    staleTime: 0,
  });

  const { mutate: putLikePostMutate, isPending: loginIsPending } = useMutation<
    PutLikePostResponse,
    ApiErrorResponse,
    PutLikePostBody
  >({
    mutationFn: async (params) => await putLikePost(params),
    onSuccess: (putLikePostData) => {
      queryClient.setQueryData<GetPostResponse[]>(["post"], (old) => {
        return old?.map((post) => {
          if (post?.id === putLikePostData?.post_id) {
            return {
              ...post,
              _count: {
                ...post._count,
                post_likes: putLikePostData?.post_likes,
              },
            };
          }
          return post;
        });
      });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Like post failed!"));
    },
  });

  const handleLikePost = async (postId: number) => {
    putLikePostMutate({ post_id: postId });
  };

  if (postsIsPending || postsIsLoading || postsIsFetching || postsIsRefetching) return <div>Loading...</div>;

  if (postsIsError) return <div>Error: {postsError?.message}</div>;

  return (
    <>
      {postsData?.map((post) => (
        <div key={post?.id} className="flex flex-col rounded-xl w-full max-h-fit bg-slate-700 shadow-lg p-3 px-4 gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="hover:opacity-70 cursor-pointer shadow-2xl">
                <AvatarImage src="/logo.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm font-medium">
                  {post?.user?.first_name} {post?.user?.last_name}
                </span>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-xs">
                    {formatDistanceToNow(new Date(post?.updated_at), { addSuffix: true })}
                  </span>
                  <FaEarthAfrica size={14} />
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-center text-slate-300">
              <BsThreeDots size={28} />
              <IoMdClose size={28} />
            </div>
          </div>
          <div className="text-white font-light">{post?.content}</div>
          <div className="flex justify-between text-gray-300 text-sm">
            <span>👍❤️😆 {post?._count?.post_likes}</span>
            <span>100 comments</span>
          </div>
          <div className="border-t border-gray-500" />
          <div className="grid grid-cols-3 text-gray-300">
            <div
              className="col-span-1 flex items-center justify-center gap-2 hover:bg-black/25 rounded-md cursor-pointer p-2 text-black font-bold"
              onClick={() => handleLikePost(post?.id)}>
              <GrLike size={21} />
              <span>Like</span>
            </div>
            <div className="col-span-1 flex items-center justify-center gap-2 hover:bg-black/25 rounded-md cursor-pointer p-1">
              <FaRegComments size={21} />
              <span>Comment</span>
            </div>
            <div className="col-span-1 flex items-center justify-center gap-2 hover:bg-black/25 rounded-md cursor-pointer p-1">
              <FaShare size={21} />
              <span>Share</span>
            </div>
          </div>
          <div className="border-t border-gray-500" />
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <span className="hover:underline cursor-pointer">View more comments</span>
            <div className="flex items-start justify-start w-full gap-2 group">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/logo.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center items-start gap-1">
                <div className="flex gap-3 items-center">
                  <div className="flex flex-col gap-1 bg-white/95 rounded-2xl p-2 text-black text-xs">
                    <span className="font-bold">Nguyen Viet Tuan</span>
                    <span>Quá tuyệt là vời</span>
                  </div>
                  <BsThreeDots
                    className="hidden group-hover:block cursor-pointer hover:bg-black/20 rounded-full"
                    size={20}
                  />
                </div>
                <div className="flex gap-3 text-xs ml-2">
                  <span className="hover:underline cursor-pointer">Like</span>
                  <span className="hover:underline cursor-pointer">Reply</span>
                  <span className="hover:underline cursor-pointer">Share</span>
                  <span className="text-gray-400 hover:underline cursor-pointer">3 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostView;
