export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  category: 'templates' | 'policies' | 'guides' | 'kits';
  image: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export enum RoutePath {
  HOME = '/',
  SHOP = '/shop',
  PRODUCT = '/shop/:id',
  ABOUT = '/about',
  SERVICES = '/services',
  BLOG = '/resources',
  BLOG_POST = '/resources/:id',
  CONTACT = '/contact',
}