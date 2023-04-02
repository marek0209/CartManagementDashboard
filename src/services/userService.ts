import axios from "axios";
import { User } from "../types/userTypes";

const userApi = axios.create({
  baseURL: "https://dummyjson.com/users",
  timeout: 1000,
});

export async function getUsers(): Promise<User[]> {
  try {
    const response = await userApi.get("/");
    return response.data.users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}

export async function getSingleUser(id: number): Promise<User> {
  try {
    const response = await userApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user with ID ${id}`);
  }
}
