import "./ModalSwitchLanguage.css";
import CardLang from "../../components/CardLang";
import { GoArrowLeft } from "react-icons/go";
import { getShowModal } from "../../store/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { dictLangs } from "../../service";
import { createPortal } from "react-dom";
import { useMemo } from "react";
import type { RootState } from "../../store";

type DataLang = {
  activeLang: string;
  option: "sl" | "tl";
};

const ModalSwitchLanguage = () => {
  const dispatch = useDispatch();
  const modalRoot: HTMLElement | null = document.getElementById("modal");
  const dataLang = useSelector(
    (state: RootState) => state.app.dataLang as DataLang
  );
  const mainLang = useSelector((state: RootState) => state.app.mainLang);

  const groupedElements = useMemo(() => {
    const keys = Object.keys(dictLangs);
    const groups = [];

    for (let i = 0; i < keys.length; i += 3) {
      const group = keys
        .slice(i, i + 3)
        .map((key) => (
          <CardLang
            key={crypto.randomUUID()}
            lang={key}
            active={key === dataLang.activeLang}
            option={dataLang.option}
          />
        ));
      groups.push(
        <div key={i} className="modal-content">
          {group}
        </div>
      );
    }

    return groups;
  }, [dictLangs]);

  if (!modalRoot) return null;

  return createPortal(
    <section className="modalSwitch">
      <div className="modalSwitch__content">
        <div
          className="modalSwitch__text"
          onClick={() => dispatch(getShowModal(false))}
        >
          <GoArrowLeft style={{ transform: "scale(1.6)" }} />
          {mainLang === "en" ? <span>Come back</span> : <span style={{fontWeight : 600}}>Вернуться</span>}
        </div>
        {groupedElements}
      </div>
    </section>,
    modalRoot
  );
};

export default ModalSwitchLanguage;
