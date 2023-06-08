import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";

export class ApiInstance {
  private static instance: AxiosInstance;
  public static getInstance() {
    if (!this.instance) {
      const headers: Partial<AxiosRequestHeaders> = {
        "Content-Type": "application/json",
      };
      
      this.instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers,
      });
    }
    return this.instance;
  }
}
