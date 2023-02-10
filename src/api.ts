import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api/v1/"
      : "https://port-0-stamp-backend-by52fb24lbbufx8n.gksl2.cloudtype.app/api/v1/",
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
