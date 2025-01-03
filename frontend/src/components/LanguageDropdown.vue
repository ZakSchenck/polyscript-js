<template>
  <div>
    <select v-model="selectedOption" class="dropdown" @change="updateSelectedLanguage">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["Nederlands", "Español", "中文", "日本語", "Deutsch"],
      selectedOption: "Español", 
    };
  },


  methods: {
    updateSelectedLanguage() {
      
      this.$store.commit("setSelectedLanguage", this.selectedOption);
      console.log(this.selectedOption)
    }
  }
};
</script>

<style scoped lang="scss">
div {
  width: 100%;
  position: relative;
}
.dropdown {
  font-size: 20px;
  border: none;
  outline: none;
  background: none;
  margin-left: -15%;
  position: relative;
  width: min-content;
  &:hover {
    cursor: pointer;
  }
}
</style>
