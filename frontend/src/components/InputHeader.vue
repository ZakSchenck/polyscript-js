<template>
  <div class="input-header__container">
    <p>Detects Javascript</p>
    <LanguageDropdown />
    <ToolTip
      tipNote="Note: Direct language translations may not be 100% accurate. Though most are, do not use this as a perfectly accurate dictionary. Some JS keywords may be nonexistent since it is stil in beta. The translator does not catch all Javascript errors."
    />
  </div>
</template>

<script>
import ToolTip from "./ToolTip.vue";
import LanguageDropdown from "./LanguageDropdown.vue";
export default {
  name: "InputHeader",
  components: {
    ToolTip,
    LanguageDropdown
  },
};
</script>

<style scoped lang="scss">
.input-header__container {
  height: 60px;
  width: 100%;
  border: 2px solid #dae1e8;
  margin: 25px auto 0 auto;
  background-color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>