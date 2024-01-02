<template>
  <button>Dutch</button>
</template>

<script>
export default {
  data() {
    return {
      options: ["Dutch"],
    };
  },
};
</script>

<style scoped lang="scss">
button {
  font-size: 20px;
  border: none;
  outline: none;
  background: none;
  margin-left: auto;
  padding: 8px 12px;
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