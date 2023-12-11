import { useState } from "react";

import { LangContext } from "./types";
import { EN } from "./languages";

const useCreateContext = (): LangContext => {
  const [lang, setLang] = useState(EN);

  return {
    lang: lang,
    setLang: setLang,
  };
};

export default useCreateContext;
