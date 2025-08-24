import { GoArrowSwitch } from "react-icons/go";
import { Button } from "@mantine/core";
import "./LanguageSelect.css";

const LanguageSelect = () => {
  return (
    <section className="languageSelect">
      <Button variant="outline" color="#2a2abc" radius="xl">
        Russian
      </Button>
      <div className="languageSelect__reverse">
        <GoArrowSwitch color="#FFFFFF" />
      </div>
      <Button variant="outline" color="#2a2abc" radius="xl">
        English
      </Button>
    </section>
  );
};

export default LanguageSelect;
