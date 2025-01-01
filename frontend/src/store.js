import { createStore } from 'vuex';
import { processCode } from './translation/translator';
import { dutchKeywordMap } from './translation/language-maps/dutch-maps';
import { spanishKeywordMap } from './translation/language-maps/spanish-maps';
import { mandarinKeywordMap } from './translation/language-maps/mandarin-maps';
import { japaneseKeywordMap } from './translation/language-maps/japanese-maps';

export default createStore({
  state: {
    // Input text for translation input
    inputText: "const newVariable = false;\nfunction myFunction(param) { if (myVariable === false) {\n  return true;\n }\n return null;\n} ",
    // Resulted translated code
    translatedCode: '',
    // Current Selected Language
    selectedLanguage: 'Nederlands',
  },
  mutations: {
    setInputText(state, payload) {
      state.inputText = payload;
    },
    setTranslatedCode(state, payload) {
      console.log("Setting translated code:", payload)
      state.translatedCode = payload;
    },
    setSelectedLanguage(state, payload) {
      state.selectedLanguage = payload;
    },
  },
  getters: {
    getTranslatedCode(state) {
        return state.translatedCode;
    },
    getSelectedLanguage(state) {
        return state.selectedLanguage;
    }
  },   
  actions: {
    // Action to process the code translation
    translateCode({ commit, state }) {

      const languageKeywordMaps = {
        Nederlands: dutchKeywordMap,
        中文: mandarinKeywordMap,
        日本語: japaneseKeywordMap,
        Español: spanishKeywordMap,
    };

      const result = processCode(languageKeywordMaps[state.selectedLanguage], state.inputText)
        if (result.success) {
          commit('setTranslatedCode', result.code);
        } else {
          // Set error message back to frontend
          commit('setTranslatedCode', `Error: ${result.error}`);
        }
        // Return result back to the component
        return result; 
      },
  },
});
