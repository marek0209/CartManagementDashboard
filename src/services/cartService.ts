import axios, { AxiosInstance } from "axios";
import { Cart } from "../types/cartTypes";

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
