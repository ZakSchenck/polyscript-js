<template>
  <div class="language-counter__container">
    <img src="../assets/code.png" alt="code icon" />
    <div class="language-counter__text-wrapper">
      <h4>{{ header }}</h4>
      <p>{{ subtext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageCounter",
  props: {
    header: String,
    subtext: String,
  },
};
</script>

<style lang="scss" scoped>
.language-counter__container {
  width: 170px;
  height: 60px;
  border: 2px solid #dae1e8;
  margin-left: 6%;
  margin-top: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 8px;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: rgb(41, 91, 166);
    bottom: -2px;
    left: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
  }
  .language-counter__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 170px;
    gap: 2px;
    margin-left: auto;
    h4 {
      margin: 0;
      font-size: 14px;
    }
    p {
      margin: 0;
      font-size: 12px;
      color: rgb(112, 112, 112);
    }
  }
  img {
    width: 30px;
    height: auto;
  }
}
</style>