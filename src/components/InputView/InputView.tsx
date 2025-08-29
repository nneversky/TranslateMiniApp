import { Textarea, Image } from "@mantine/core";
import { capitalize } from "lodash";
import { HiDuplicate } from "react-icons/hi";
import { dictLangs, pathLangs } from "../../service";
import { useSelector } from "react-redux";
import { GoChevronDown } from "react-icons/go";
import type { RootState } from "../../store";
import "./InputView.css";

type LanguageKey = keyof typeof pathLangs;

const InputView = () => {
  const translateText = useSelector(
    (state: RootState) => state.app.translateText
  );
  const tl = useSelector((state: RootState) => state.app.tl as LanguageKey);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(translateText);
    } catch {
      return null;
    }
  };

  return (
    <section className="input input-view">
      <div className="input__header header">
        <Image style={{ width: "7%", height: "7%" }} src={pathLangs[tl]} />
        <span className="header__text">{capitalize(dictLangs[tl])}</span>
        <GoChevronDown size={"8%"} />
      </div>
      <Textarea
        className="input__area"
        value={translateText}
        maxRows={4}
        autosize
        styles={{
          input: {
            backgroundColor: "#FFFFFF",
            fontFamily: "PoppinsLight, Open Sans, sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "20px",
          },
        }}
        size="30"
      />
      <div className="input__icon copy">
        <HiDuplicate
          onClick={handleCopy}
          style={{
            color: "#2a2abc",
          }}
        />
      </div>
    </section>
  );
};

export default InputView;
