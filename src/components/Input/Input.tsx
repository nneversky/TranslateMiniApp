import { Textarea, Image } from "@mantine/core";
import { HiOutlineX } from "react-icons/hi";
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setText,
  setBufferText,
  getShowModal,
  getDataLang,
} from "../../store/slices/appSlice";
import { GoChevronDown } from "react-icons/go";
import { dictLangs, pathLangs } from "../../service";
import type { RootState } from "../../store";
import _ from "lodash";
import "./Input.css";

type LanguageKey = keyof typeof pathLangs;

const Input = () => {
  const dispatch = useDispatch();
  const sl = useSelector((state: RootState) => state.app.sl as LanguageKey);
  const bufferText = useSelector((state: RootState) => state.app.bufferText);

  const handleClickModal = () => {
    dispatch(getDataLang({ activeLang: sl, option: "sl" }));
    dispatch(getShowModal(true));
  };

  const debouncedLog = useCallback(
    _.debounce((value: string) => {
      dispatch(setText(value));
    }, 300),
    []
  );

  const handleClick = () => {
    dispatch(setBufferText(""));
    dispatch(setText(""));
  };

  useEffect(() => {
    debouncedLog(bufferText);
  }, [bufferText]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setBufferText(e.target.value));
  };

  return (
    <section className="input">
      <div className="input__header header" onClick={handleClickModal}>
        <Image style={{ width: "7%", height: "7%" }} src={pathLangs[sl]} />
        <span className="header__text">{_.capitalize(dictLangs[sl])}</span>
        <GoChevronDown size={"8%"} />
      </div>
      <Textarea
        className="input__area"
        placeholder="Enter text..."
        onChange={(e) => handleChange(e)}
        value={bufferText}
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
      <div
        className={`input__icon icon__del${bufferText.trim().length > 0 ? "--active" : ""}`}
      >
        <HiOutlineX
          onClick={handleClick}
          style={{
            color: "#2a2abc",
          }}
        />
      </div>
    </section>
  );
};

export default Input;
