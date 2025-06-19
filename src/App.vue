<template>
  <div class="padder"></div>
  <div class="wrapper">
    <HeaderItem />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <footer>
    <LinksItem />
    {{ $t("lights") }}
    <label id="theme-switch" class="theme-switch" for="checkbox_theme">
      <input type="checkbox" id="checkbox_theme" />
      <span class="slider round"></span>
    </label>
    · {{ $t("made") }}<a href="https://vuejs.org/" target="_blank"><b>Vue.js</b></a>
    <br />
    <button class="locale" :class="{ selected: $i18n.locale == 'en' }" @click="toggleLanguage('en')">English</button> ·
    <button class="locale" :class="{ selected: $i18n.locale == 'fr' }" @click="toggleLanguage('fr')">Français</button> ·
    <button class="locale" :class="{ selected: $i18n.locale == 'ja' }" @click="toggleLanguage('ja')">日本語</button>
    <br />
    <div class="moved">{{ $t("moved") }}</div>
  </footer>
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
import LinksItem from "./components/LinksItem.vue";
export default {
  name: "PortfolioItem",
  components: {
    HeaderItem,
    LinksItem,
  },
  methods: {
    toggleLanguage(language) {
      this.$i18n.locale = language;
      localStorage.setItem("preferredLanguage", language);

      this.$nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
    },
  },
  created() {
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    if (preferredLanguage) {
      this.$i18n.locale = preferredLanguage;
    } else {
      const availableLocales = this.$i18n.availableLocales;
      const usersLanguage = window.navigator.language;
      if (availableLocales.includes(usersLanguage)) {
        this.$i18n.locale = usersLanguage;
      } else {
        this.$i18n.locale = "en";
      }
    }
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.padder {
  display: none;
}

@media (min-width: 1024px) {
  .padder {
    display: flex;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

footer {
  padding-bottom: 20px;
  text-align: center;
  white-space: pre-line;
}

small {
  font-size: 0.8rem;
}

.locale {
  background: none;
  border: none;
  text-decoration: none;
  font-weight: 600;
  color: var(--color-link);
  transition: 0.4s;
  padding: 3px;
}

.locale.selected {
  color: var(--color-link-selected);
}

@media (hover: hover) {
  .locale:hover {
    background-color: hsla(215, 100%, 37%, 0.2);
    border-radius: 10px 10px;
  }
}

/* Switch */
/* The switch - the box around the slider */
.theme-switch {
  position: relative;
  display: inline-block;
  bottom: 2px;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--vt-c-red-light);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--vt-c-red-light);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.moved {
  font-size: smaller;
}
</style>
