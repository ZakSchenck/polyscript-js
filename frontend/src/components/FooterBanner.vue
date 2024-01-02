<template>
  <footer>
    <FooterIcons />
  </footer>
</template>

<script>
import FooterIcons from './FooterIcons.vue';
export default {
name: 'FooterBanner',
components: {
  FooterIcons
}
}
</script>

<style>
    footer {
        width: 100%;
        height: 75px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>