import Input from "../../components/Input";
import LanguageSelect from "../../components/LanguageSelect";
import InputView from "../../components/InputView";
import "./App.css";

const App = () => {
  return (
    <section className="app">
      <div className="app__header">
          <span className="app__header-text">Get started & Translate)</span>
          <div className="app__header--bg"></div>
      </div>
      <div className="app__input">
        <Input />
        <InputView />
      </div>
      <LanguageSelect />
    </section>
  );
};

export default App;
