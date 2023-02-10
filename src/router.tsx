import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Camera from "./routes/Camera";
import Community from "./routes/Community";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Tour from "./routes/Tour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tour",
        element: <Tour />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "camera",
        element: <Camera />,
      },
    ],
  },
]);

export default router;
