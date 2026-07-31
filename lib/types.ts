import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type NavbarProps = {
  user: IUSER
}

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


export interface Provider {
  id: string;
  name: string;
  email: string;
}

export interface GearItem {
  id: string;
  title: string;
  description: string;
  brand: string;
  pricePerDay: number;
  stock: number;
  status: "AVAILABLE" | "OUT_OF_STOCK" | string;
  image: string;
  providerId: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  provider: Provider;
}

export interface ApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    gears: GearItem[];
  }
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    categories: CategoryItem[];
  };
}

export interface GearQuery {
  search?: string;
  category?: string;
  brand?: string;
  availability?: string;
  minPrice?: string;
  maxPrice?: string;
}

export type ISidebarItem = {
  label: string,
  href: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}