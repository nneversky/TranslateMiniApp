import Input from "../../components/Input";
import LanguageSelect from "../../components/LanguageSelect";
import { getTranslate } from "../../store/slices/appSlice";
import InputView from "../../components/InputView";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import type { AppDispatch } from "../../store";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sl = useSelector((state: RootState) => state.app.sl);
  const tl = useSelector((state: RootState) => state.app.tl);
  const text = useSelector((state: RootState) => state.app.text);

  useEffect(() => {
    dispatch(getTranslate({ sl, tl, text }));
  }, [sl, tl, text]);

  return (
    <>
      <section className="app">
        <div className="app__header">
          <span className="app__header-text">Get started & Translate)</span>
        </div>
        <div className="app__input">
          <Input />
          <InputView />
        </div>
        <LanguageSelect />
      </section>
      <span className="comingSoon">Development for tablets and pc will be coming soon)</span>
    </>
  );
};

export default App;
