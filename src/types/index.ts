import  React from "react";

//type of the alertbox
export type AlertType = 'success' | 'error' | 'warning' | 'info' ;

export interface AlertBoxProps{
    type:AlertType;
    message: string;
    onClose? : () => void ;
    children? :React .ReactNode;
}

//userprofilecard types
export interface User {
    id:string;
    name: string;
    email:string;
    role:string;
    avatarUrl?:string;
}

export interface UserProfileCardProps{
    user: User;
    showEmail? : boolean;
    showRole? : boolean;
    onEdit? : (userId:string) => void;
    children ? :React.ReactNode;
}

// ProductDisplay Types
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
