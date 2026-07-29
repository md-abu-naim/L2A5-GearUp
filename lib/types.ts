export type IUSER = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    user: User;
  };
};

type UserRole = "CUSTOMER" | "PROVIDER" | "ADMIN";

type UserStatus = "ACTIVE" | "SUSPENDED";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  phone: string | null;
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
};