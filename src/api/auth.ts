import http from "@/lib/http";

export interface AuthResponse {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  avatar: string;
  cover: string;
  email: string;
  password: string;
  gender: number;
  phone: string;
  date_of_birth: Date;
  created_at: Date;
  updated_at: Date;
}

// ----------------------------------------------LOGIN----------------------------------------------

export interface LoginAuthBody {
  email: string;
  password: string;
}

export const loginAuth = async (params: LoginAuthBody) =>
  http.post<AuthResponse>("auth/login", params).then((res) => res.data);

// ----------------------------------------------Register----------------------------------------------

export interface RegisterAuthBody {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  dob: Date;
  gender: string;
}

export const registerAuth = async (params: RegisterAuthBody) =>
  http.post<AuthResponse>("auth/register", params).then((res) => res.data);

// ----------------------------------------------ME----------------------------------------------

export const meAuth = async () => http.get<AuthResponse>("auth/me").then((res) => res.data);

