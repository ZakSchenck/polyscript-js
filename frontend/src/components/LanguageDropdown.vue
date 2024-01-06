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
      options: ["Dutch", "Spanish", "Mandarin", "Japanese"],
      selectedOption: "Dutch", 
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
}
.dropdown {
  font-size: 20px;
  border: none;
  outline: none;
  background: none;
  margin-left: 45%;
  position: relative;
  width: min-content;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(0, 115, 255);
    height: 3px;
  }
}
</style>
