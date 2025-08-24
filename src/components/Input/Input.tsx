import { Textarea, Image } from "@mantine/core";
import { GoPaste } from "react-icons/go";
import ru from "../../assets/images/ru.png";
import "./Input.css";

const Input = () => {
  return (
    <section className="input">
      <div className="input__header header">
        <Image style={{ width: "7%", height: "7%" }} src={ru} />
        <span className="header__text">Russian</span>
      </div>
      <Textarea
        className="input__area"
        placeholder="Enter text"
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
      <div className="input__icon paste">
        <GoPaste
          style={{
            color: "#2a2abc",
          }}
        />
      </div>
    </section>
  );
};

export default Input;
