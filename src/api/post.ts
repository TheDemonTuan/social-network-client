import http from "@/lib/http";
import { AuthResponse } from "./auth";

export interface PostResponse {
  id: number;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// ----------------------------------------------SUBMIT POST----------------------------------------------

export interface SubmitPostBody {
  content: string;
}

export const submitPost = async (params: SubmitPostBody) => http.post("post", params).then((res) => res.data);

// ----------------------------------------------GET POST----------------------------------------------

export interface GetPostResponse extends PostResponse {
  user: AuthResponse;
  _count: {
    post_likes: number;
  };
}

export const getPosts = async () => http.get("post").then((res) => res.data);

// ----------------------------------------------GET LIKE----------------------------------------------

export interface PutLikePostResponse {
  post_id: number;
  post_likes: number;
}

export interface PutLikePostBody {
  post_id: number;
}

export const putLikePost = async (params: PutLikePostBody) =>
  http.put(`post/like/${params?.post_id}`).then((res) => res.data);
