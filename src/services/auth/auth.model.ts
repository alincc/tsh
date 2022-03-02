export interface AuthQuery {
  username: string;
  password: string;
}

export interface AuthResponse<T> {
  user: T | null;
  expiresIn: string;
  access_token: string;
}
export interface User {
  id: number;
  username: string;
  avatar: string;
}

export interface AuthState<T> {
  token: string | null;
  user: T | null;
}
