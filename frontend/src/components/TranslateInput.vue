<template>
  <div class="translate-input__container">
    <div class="translate-input__text-container">
      <textarea
        :value="inputText"
        @input="updateInputText($event.target.value)"
        placeholder="Paste your VALID Javascript code here"
      ></textarea>
      <textarea readonly :value="returnedText"></textarea>
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
export default {
  name: "TranslateInput",
  components: {
    TranslateButton,
  },
  data() {
    return {
      returnedText: "",
    };
  },
  computed: {
    // Updates the store with reactive input text
    inputText() {
      return this.$store.state.inputText;
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

textarea {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid #dae1e8;
  border-left: 2px solid #dae1e8;
  border-right: 2px solid #dae1e8;
  height: 430px;
  resize: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 16px;
  padding-top: 2%;
  padding-left: 2%;
  &:focus {
    border: 2px solid rgb(0, 0, 159);
  }
}

@media all and (max-width: 788px) {
    .translate-input__text-container {
        flex-direction: column;
    }
}
</style>