<template>
  <section id="hero">

    <div class="hero__photo">
      <img src="@/assets/hero-photo.jpg" alt="">
    </div>

    <div class="hero__info">
      <div class="hero__info--text">
        <h1 class="hero">Уборка квартир в Киеве </h1>

        <p>Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку. </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
  props: {

  },
})
export default class HeroSection extends Vue {

}
</script>

<style lang="scss">
section#hero {
  min-height: calc(100vh - $top_header_height);

  display: flex;
  align-items: center;

  .hero {
    &__photo {
      height: 100%;
      width: 50%;

      img {
        height: 100%;
        width: 100%;
      }
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 50%;

      &--text {
        max-width: 400px;
      }
    }
  }
}
</style>
