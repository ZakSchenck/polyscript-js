<template>
  <header>
    <div class="nav-header__img-container">
      <img id="nav-header__beta" src="../assets/beta.png" alt="beta banner" />
      <img src="../assets/polylogo.png" alt="polyscript logo" />
    </div>
    <DonateButton />
  </header>
</template>

<script>
import DonateButton from './DonateButton.vue';
export default {
  name: "NavHeader",
  components: {
    DonateButton
  }
};
</script>

<style scoped lang="scss">
header {
  height: 60px;
  width: 100%;
  padding: 0 10% 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  .nav-header__img-container {
    position: relative;
    #nav-header__beta {
        position: absolute;
        right: -20px;
        bottom: -8px;
    }
  }
  img {
    height: 30px;
    width: auto;
  }
}
</style>