import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </BrowserRouter>
  </Provider>
);
