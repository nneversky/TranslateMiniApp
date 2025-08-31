import { Card, Text, Image } from "@mantine/core";
import { pathLangs, dictLangs } from "../../service";
import { switchOption, getShowModal } from "../../store/slices/appSlice";
import { useDispatch } from "react-redux";
import { capitalize } from "lodash";
import "./CardLang.css";

type CardProps = {
  lang: string;
  active: boolean;
  option: "sl" | "tl";
};

type ValidLang = keyof typeof pathLangs;

const isValidLang = (lang: string): lang is ValidLang => {
  return lang in pathLangs;
};

const CardLang = ({ lang, active, option }: CardProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!active && isValidLang(lang)) {
      dispatch(switchOption({ lang, option }));
      dispatch(getShowModal(false));
    }
  };

  if (!isValidLang(lang)) {
    return null;
  }

  return (
    <Card
      className="cardLang"
      onClick={handleClick}
      w={"70%"}
      h={"100%"}
      padding="lg"
      radius="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: active ? "default" : "pointer",
      }}
    >
      <div className={`card__content ${active ? "content--active" : ""}`}>
        <Image w={"80%"} src={pathLangs[lang]} />
        <Text
          style={{
            fontWeight: "600",
            fontFamily: "PoppinsMedium, Open Sans, sans-serif",
          }}
        >
          {capitalize(dictLangs[lang])}
        </Text>
      </div>
    </Card>
  );
};

export default CardLang;
