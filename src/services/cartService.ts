import axios, { AxiosInstance } from "axios";
import { Cart, NewCart } from "../types/cartTypes";

const API_BASE_URL = "https://dummyjson.com/carts";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

async function handleNetworkErrors<T>(promise: Promise<T>): Promise<T> {
  try {
    return await promise;
  } catch (error: any) {
    console.error(error);
    if (error.response && error.response.status === 404) {
      throw new Error("The requested resource was not found.");
    }
    throw new Error("An error occurred while communicating with the server.");
  }
}

export async function getCarts(): Promise<Cart[]> {
  const response = await handleNetworkErrors(axiosInstance.get(""));
  return response.data.carts;
}

export async function getSingleCart(id: number): Promise<Cart> {
  try {
    const response = await handleNetworkErrors(axiosInstance.get(`/${id}`));
    return response.data;
  } catch (error: any) {
    throw error;
  }
}

export async function addCart(products: NewCart[]): Promise<Cart> {
  try {
    const response = await handleNetworkErrors(
      axiosInstance.post("/add", {
        userId: 1,
        products,
      })
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add cart.");
  }
}

export async function deleteCart(id: number): Promise<void> {
  try {
    const response = await handleNetworkErrors(axiosInstance.delete(`/${id}`));
    if (!response) {
      throw new Error("Failed to delete cart.");
    }
  } catch (error) {
    throw error;
  }
}
