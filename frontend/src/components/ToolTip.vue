<template>
  <div>
    <button v-tippy="{ content: tipNote }">i</button>
  </div>
</template>
  
<script>
import { directive } from "vue-tippy";

export default {
  name: "ToolTip",
  props: {
    // Note text for the tool tip
    tipNote: {
        type: String,
        default: ''
    }
  },
  directives: {
    tippy: directive,
  },
};
</script>

<style scoped lang="scss">
div {
    margin-left: auto;
    margin-right: 2%;
}
button {
    outline: none;
    border: none;
    background-color: rgb(20, 69, 125);
    font-size: 24px;
    font-weight: 900;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>