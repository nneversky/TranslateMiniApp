import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ky from "ky";

interface TranslateResponse {
  0: Array<[string, string]>;
}

interface AppState {
  mainLang: string;
  sl: string;
  tl: string;
  text: string;
  bufferText: string;
  translateText: string;
  showModal: boolean;
  dataLang: Record<string, string>;
  speedVoice: number;
}

interface SwitchOptionPayload {
  lang: string;
  option: "sl" | "tl";
}

export const getTranslate = createAsyncThunk(
  "app/getTranslate",
  async ({ sl, tl, text }: { sl: string; tl: string; text: string }) => {
    const res = await ky.get(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${text}`
    );

    const data: TranslateResponse = await res.json();
    return data;
  }
);

const appSlice = createSlice({
  name: "app",
  initialState: {
    mainLang: "en",
    sl: "ru",
    tl: "en",
    text: "",
    bufferText: "",
    translateText: "",
    showModal: false,
    dataLang: {},
    speedVoice: 1,
  } as AppState,
  reducers: {
    switchLangs(state) {
      const newSl = state.sl;
      const newTl = state.tl;
      const newText = state.bufferText;
      const newTranslateText = state.translateText;

      state.sl = newTl;
      state.tl = newSl;
      state.bufferText = newTranslateText;
      state.translateText = newText;
    },
    setSpeedVoice(state) {
      switch (state.speedVoice) {
        case 0.2:
          state.speedVoice = 0.5;
          break;
        case 0.5:
          state.speedVoice = 1;
          break;
        case 1:
          state.speedVoice = 2;
          break;
        case 2:
          state.speedVoice = 3;
          break;
        case 3:
          state.speedVoice = 0.2;
          break;
        default:
          return;
      }
    },
    switchOption(state, action: PayloadAction<SwitchOptionPayload>) {
      const { lang, option } = action.payload;
      state[option] = lang;
    },
    getDataLang(state, action) {
      state.dataLang = action.payload;
    },
    getShowModal(state, action) {
      state.showModal = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
    setBufferText(state, action) {
      state.bufferText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTranslate.fulfilled, (state, action) => {
      const payload = action.payload as TranslateResponse;
      state.translateText = payload[0][0][0];
    });
  },
});

export const {
  switchLangs,
  setText,
  setBufferText,
  getShowModal,
  getDataLang,
  switchOption,
  setSpeedVoice,
} = appSlice.actions;
export default appSlice.reducer;
