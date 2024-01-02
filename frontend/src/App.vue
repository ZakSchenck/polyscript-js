<template>
  <div>
    <NavHeader />
    <LanguageCounter header="Translate Code" subtext="1 language" />
    <div class="app__text-container">
      <InputHeader />
      <div class="app__translator-container">
        <TranslateInput :isReadOnly="false" />
      </div>
    </div>
  </div>
</template>

<script>
import LanguageCounter from "./components/LanguageCounter.vue";
import NavHeader from "./components/NavHeader.vue";
import InputHeader from "./components/InputHeader.vue";
import TranslateInput from "./components/TranslateInput.vue";
export default {
  name: "App",
  components: {
    NavHeader,
    LanguageCounter,
    InputHeader,
    TranslateInput,
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
</style>