<template>
  <button :style="{ backgroundColor: buttonColor }">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'TranslateButton',
    props: {
        // Inner Text for the button
        buttonText: {
            type: String,
            default: '',
        },
        // background color for the button
        buttonColor: {
            type: String,
            default: '',
        }
    }
}
</script>

<style scoped lang="scss">
button {
    border: none;
    outline: none;
    font-size: 22px;
    color: white;
    padding: 10px;
    margin-top: 8px;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        background-color: blue;
    }
}
</style>