export type Product = {
  id: number;
  title: string;
  description: string;
  //TODO: Or not string... mb enum
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  //TODO: Or not string[]...
  tags: string[];
  //TODO: Or not string...
  brand: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: 'In Stock' | 'Not In Stock';
  returnPolicy: 'No return policy';
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
};
