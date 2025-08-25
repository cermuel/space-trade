interface Data {
  error: boolean;
  message: string;
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export interface InitiateRegisterPayload {
  email: string;
}

export interface InitiateRegisterResponse {
  token: string;
  id: string;
}

export interface InitiateRegisterError {
  status: StatusCode;
  data: Data;
}

export interface CompleteRegisterPayload {
  auth_id: string;
  email: string;
  otp: string;
  first_name: string;
  last_name: string;
  phone: string;
  username: string;
  password: string;
  referrer?: string;
}

export interface CompleteRegisterResponse {
  token: string;
  user: User;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  photo: unknown;
  country: string;
  dob: unknown;
  api_token: unknown;
  role: number;
  email_verified_at: string;
  phone_verified_at: unknown;
  fcm: unknown;
  created_at: string;
  updated_at: string;
  referrer: unknown;
  status: number;
  username: string;
  pin: unknown;
  gender: unknown;
  the2fa: unknown;
}

export interface CompleteLoginPayload {
  auth_id: string;
  email: string;
  otp: string;
}

export interface InitiateLoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordResponse {
  message: string;
  otp: string;
}
export interface ResetPasswordPayload {
  email: string;
  otp: string;
  password: string;
}
