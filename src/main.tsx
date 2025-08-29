import { StrictMode } from "react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./pages/app";
import store from "./store/index";
import "@mantine/core/styles.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
