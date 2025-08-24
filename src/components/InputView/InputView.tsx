import { Textarea, Image } from "@mantine/core";
import { GoCopy } from "react-icons/go";
import en from "../../assets/images/en.png";
import "./InputView.css";

const InputView = () => {
  return (
    <section className="input">
      <div className="input__header header">
        <Image style={{ width: "7%", height: "7%" }} src={en} />
        <span className="header__text">English</span>
      </div>
      <Textarea
        className="input__area"
        value='Your text'
        disabled
        maxRows={4}
        styles={{
          input: {
            backgroundColor: "#FFFFFF",
            fontFamily: "PoppinsLight, Open Sans, sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "20px",
            minBlockSize: "150px",
          },
        }}
        size="30"
      />
      <div className="input__icon copy">
        <GoCopy
          style={{
            color: "#2a2abc",
          }}
        />
      </div>
    </section>
  );
};

export default InputView;
