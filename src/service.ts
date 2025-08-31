import en from ".//assets/images/en.png";
import ru from ".//assets/images/ru.png";
import ja from ".//assets/images/ja.png";
import de from ".//assets/images/de.png";
import it from ".//assets/images/it.png";
import zh from ".//assets/images/zh-TW.png";
import ko from ".//assets/images/ko.png";
import hi from ".//assets/images/hi.png";
import es from ".//assets/images/es.png";

export const dictLangs = {
  en: "english",
  ru: "russian",
  ja: "japanese",
  de: "german",
  it: "italian",
  "zh-TW": "chinese",
  ko: "korean",
  hi: "indian",
  es: "spanish",
};

export const pathLangs = {
  en: en,
  ru: ru,
  ja: ja,
  de: de,
  it: it,
  "zh-TW": zh,
  ko: ko,
  hi: hi,
  es: es,
};

export const dictOnVoice = {
  en: "en-US",
  ru: "ru-RU",
  ja: "ja-JP",
  de: "de-DE",
  it: "it-IT",
  "zh-TW": "zh-TW",
  ko: "ko-KR",
  hi: "hi-IN",
  es: "es-ES",
};

export const getVoice = (
  text: string,
  lang: string = "en-US",
  speedVoice: number
) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speedVoice;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
};
