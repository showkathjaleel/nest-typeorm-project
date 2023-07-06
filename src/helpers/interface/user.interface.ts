import { Observable } from 'rxjs';

export interface getUserByIdRequest {
  id: number;
}

export interface getUserByIdResponse {
  user: User | undefined;
}

export interface User {
  id: number;
  name: string;
}

export interface UserServiceClient {
  getUserById(request: getUserByIdRequest): Observable<getUserByIdResponse>;
}

export interface UserRegisterRequest {
  email: string;
  password: string;
}

export interface UserRegisterResponse {
  id: number;
  email: string;
}
