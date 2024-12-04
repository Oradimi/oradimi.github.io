import { createI18n } from "vue-i18n";
import en from "./en";
import fr from "./fr";
import ja from "./ja";

const i18n = createI18n({
  warnHtmlInMessage: "off",
  locale: "en",
  messages: {
    en,
    fr,
    ja,
  },
});

export default i18n;
