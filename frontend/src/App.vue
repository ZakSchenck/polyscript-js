<template>
  <div>
    <NavHeader />
    <LanguageCounter header="Translate Code" subtext="4 Languages" />
    <div class="app__text-container">
      <InputHeader />
      <div class="app__translator-container">
        <TranslateInput :isReadOnly="false" />
      </div>
    </div>
    <InfoCard />
    <FooterBanner />
  </div>
</template>

<script>
import LanguageCounter from "./components/LanguageCounter.vue";
import NavHeader from "./components/NavHeader.vue";
import InputHeader from "./components/InputHeader.vue";
import TranslateInput from "./components/TranslateInput.vue";
import InfoCard from "./components/InfoCard.vue";
import FooterBanner from './components/FooterBanner.vue';

export default {
  name: "App",
  components: {
    NavHeader,
    LanguageCounter,
    InputHeader,
    TranslateInput,
    InfoCard,
    FooterBanner
  },
};
</script>

<style>
body {
  background-color: #f5f7f8;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app__translator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.app__text-container {
  width: 88%;
  margin: 25px auto 0 auto;
}

@media all and (max-width: 1000px) {
  .app__text-container {
    width: 98%;
  }
}
</style>