export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  shortDescription: string;
  description?: string;
  category: string;
  stock: number;
  isNew: boolean;
  discount: number;
  rating: number;
  reviews: number;
  certifications: string[];
  materials?: string;
  dimensions?: string;
  weight?: string;
  origin?: string;
}