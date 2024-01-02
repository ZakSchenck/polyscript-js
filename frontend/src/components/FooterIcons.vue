<template>
  <div class="footer-icons__container">
    <a target="_blank" href="https://github.com/zakschenck">
      <img
        src="../assets/github.png"
        alt="github logo"
        class="footer-icons__icon"
      />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/zak-schenck-104792222/">
      <img
        src="../assets/linkedin.png"
        alt="linkedin logo"
        class="footer-icons__icon"
      />
    </a>
    <a target="_blank" href="https://zakschenck.github.io/zak-portfolio">
      <img
        src="../assets/user.png"
        alt="user logo"
        class="footer-icons__icon"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterIcons",
};
</script>

<style lang="scss" scoped>
.footer-icons__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  img {
    width: 40px;
    height: auto;
    filter: brightness(0) invert(1);
  }
}
</style>