import type { Product } from "../modules/products/types";
import type { User } from "../modules/users/type";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    price: 999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "2",
    name: "iPhone 16 Pro",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    price: 999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "3",
    name: "iPhone 15",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    price: 999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "4",
    name: "iPhone 16",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    price: 999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "5",
    name: "iPhone 16e",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    price: 999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
  },
];

export const mockUsers: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    phone: "+90 555 555 55 55",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@gmail.com",
    phone: "+90 555 555 55 55",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
  },
  {
    id: "3",
    firstName: "Mike",
    lastName: "Johnson",
    email: "mike.johnson@gmail.com",
    phone: "+90 555 555 55 55",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    id: "4",
    firstName: "Sarah",
    lastName: "Wilson",
    email: "sarah.wilson@gmail.com",
    phone: "+90 555 555 55 55",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
  {
    id: "5",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@gmail.com",
    phone: "+90 555 555 55 55",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
  },
];
