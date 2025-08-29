import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";

interface TranslateResponse {
  0: Array<[string, string]>;
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
    sl: "ru",
    tl: "en",
    text: "",
    bufferText: "",
    translateText: "",
  },
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

export const { switchLangs, setText, setBufferText } = appSlice.actions;
export default appSlice.reducer;
