<template>
  <div class="info-card__container">
    <div class="info-card__card">
      <img src="../assets/quotesymbol.png" alt="quote symbol" />
      <p>
        Translations and errors will be more accurate and verbose as this
        application grows. All code belongs to Zak Schenck.
      </p>
      <p id="info-card__ghub-link">
        View
        <span
          ><a href="https://github.com/zakschenck" target="_blank"
            >My Github</a
          ></span
        >
        for more!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
};
</script>

<style scoped lang="scss">
.info-card__container {
  background-color: white;
  width: 100%;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  .info-card__card {
    max-width: 610px;
    min-height: 320px;
    background-color: #f5f7f8;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    line-height: 1.6;
    border-radius: 8px;
    box-shadow: 4px 4px 12px;
    color: rgb(36, 36, 36);
    flex-direction: column;
    position: relative;
    gap: 16px;
    img {
      position: absolute;
      top: -25px;
      left: -20px;
      width: 90px;
      height: auto;
      // Applies blue tint filter to quote img
      filter: invert(1) hue-rotate(180deg);
      filter: invert(1) hue-rotate(180deg) brightness(0.36) contrast(200%)
        sepia(1) hue-rotate(200deg);
    }
    #info-card__ghub-link {
      font-weight: bold;
      margin-right: auto;
      position: relative;
      &::before {
        content: "";
        left: 0;
        bottom: -4px;
        height: 3px;
        background-color: rgb(0, 94, 255);
        position: absolute;
        width: 100%;
      }
    }
    p span a {
      color: rgb(0, 119, 255);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media all and (max-width: 460px) {
  .info-card__card {
    padding: 16px !important;
    img {
      display: none;
    }
  }
}
@media all and (max-width: 638px) {
  .info-card__card {
    width: 95%;
    img {
      display: none;
    }
  }
}
</style>