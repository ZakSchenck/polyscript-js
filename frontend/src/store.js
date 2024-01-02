import { createStore } from 'vuex';
import { processCode } from './translation/translator';
import { dutchKeywordMap } from './translation/language-maps/dutch-maps';

export default createStore({
  state: {
    // Input text for translation input
    inputText: '',
    // Resulted translated code
    translatedCode: '',
  },
  mutations: {
    setInputText(state, payload) {
      state.inputText = payload;
    },
    setTranslatedCode(state, payload) {
      console.log("Setting translated code:", payload)
      state.translatedCode = payload;
    },
  },
  getters: {
    getTranslatedCode(state) {
        return state.translatedCode;
    }
  },   
  actions: {
    translateCode({ commit, state }) {
        const result = processCode(dutchKeywordMap, state.inputText);
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
