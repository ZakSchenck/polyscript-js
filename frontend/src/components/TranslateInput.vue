<template>
  <div class="translate-input__container">
    <div class="translate-input__text-container">
      <prism-editor
      class="my-editor height-300"
      v-model="inputText"
      @input="updateInputText($event.target.value)"
      :highlight="highlighter"
      @keydown="handleKeyPress"
      :line-numbers="lineNumbers"
      ></prism-editor>
      <textarea class="translate-input__text-area" readonly :value="returnedText"></textarea>
    </div>
    <TranslateButton
      buttonText="Translate"
      buttonColor="#0f4970"
      @click="triggerTranslation"
    />
  </div>
</template>
  
  <script>
import TranslateButton from "./TranslateButton.vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "TranslateInput",
  components: {
    TranslateButton,
    PrismEditor,
  },
  data() {
    return {
      returnedText: "",
      lineNumbers: true
    };
  },
  computed: {
    // Updates the store with reactive input text
    inputText: {
      get() {
        return this.$store.state.inputText;
      },
      set(value) {
        this.$store.commit('setInputText', value);
      }
    },
  },
  methods: {
    /**
     * Updates input text in the store after each type
     * @param {string} text
     */
    updateInputText(text) {
      this.$store.commit("setInputText", text);
    },

    highlighter() {
      return highlight(this.inputText, languages.js);
    },

    // Dispatches translated code and sets returned text to translation
    async triggerTranslation() {
      const result = await this.$store.dispatch("translateCode");
      // Display translated code if no error
      if (result.success) {
        this.returnedText = result.code;
      } else {
        // Display error message
        this.returnedText = `Error: ${result.error}`;
      }
    },

  },
};
</script>

<style scoped lang="scss">
.translate-input__container {
  width: 100%;
}

.translate-input__text-container {
  display: flex;
  flex-direction: row;
}

.translate-input__text-area {
  background-color: #2D2D2D;
  color: #CCCCCC;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid #dae1e8;
  border-left: 2px solid #dae1e8;
  border-right: 2px solid #dae1e8;
  height: 430px;
  resize: none;
  font-size: 16px;
  padding-top: 2%;
  padding-left: 2%;
  &:focus {
    border: 2px solid rgb(0, 0, 159);
  }
}

.my-editor {
  background: #2d2d2d;
  color: #ccc;
  min-height: 430px;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  width: 100%;
  outline: none;
  border: none;
  height: 430px;
}

.prism-editor__textarea:focus {
  outline: none;
}


@media all and (max-width: 788px) {
    .translate-input__text-container {
        flex-direction: column;
    }
}
</style>