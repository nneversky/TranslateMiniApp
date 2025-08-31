import { StrictMode } from "react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { useSelector } from "react-redux";
import type { RootState } from "./store/index";
import App from "./pages/app";
import ModalSwitchLanguage from "./modules/ModalSwitchLanguage";
import store from "./store/index";
import "@mantine/core/styles.css";
import "./index.css";

const RootComponent = () => {
  const showModal = useSelector((state: RootState) => state.app.showModal);

  return (
    <>
      {showModal && <ModalSwitchLanguage />}
      <App />
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <RootComponent />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
