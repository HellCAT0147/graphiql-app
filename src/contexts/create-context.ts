import { useState } from "react";

import { LangContext } from "./types";
import { EN, RU } from "./languages";

const useCreateContext = (): LangContext => {
  const [lang, setLang] = useState(
    localStorage.getItem("currentLangApp") === "en" ||
      localStorage.getItem("currentLangApp") === null
      ? EN
      : RU,
  );

  return {
    lang: lang,
    setLang: setLang,
  };
};

export default useCreateContext;
