import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api/v1/"
      : "http://localhost:3000",
  withCredentials: true,
});

export const addressData = () =>
  instance.get("/test").then((response) => response.data);

export const updateStatus = () =>
  instance
    .post("/status", null, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response.data);
