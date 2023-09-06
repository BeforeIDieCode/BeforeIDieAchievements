import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import "./fonts/Chalk/Chalk-3.ttf";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
