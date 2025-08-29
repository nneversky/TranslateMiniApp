import { GoArrowSwitch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { switchLangs } from "../../store/slices/appSlice";
import "./LanguageSelect.css";

const LanguageSelect = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(switchLangs());
  };

  return (
    <section className="languageSelect">
      <div onClick={handleClick} className="languageSelect__reverse">
        <GoArrowSwitch
          style={{ width: "10vw", height: "10vh" }}
          color="#FFFFFF"
        />
      </div>
    </section>
  );
};

export default LanguageSelect;
