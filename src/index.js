import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";

// import style
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="flex-col px-16 py-20 h-full max-w-full flex justify-center items-center bg-blue-200 gap-y-8">
    <Home />
  </div>
);
