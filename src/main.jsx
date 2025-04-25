import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Api from "./Api.jsx";

import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Api />
    </BrowserRouter>
  </StrictMode>
);
