<template>
  <section id="hero">

    <div class="hero__photo">
      <img src="@/assets/hero-photo.jpg" class="animate__slideInLeft wow animate__animated" alt="hero photo">
    </div>

    <div class="hero__info">
      <div class="hero__info--text">
        <h1 class="hero">Уборка <br /> квартир <br /> в Киеве </h1>

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
  min-height: 100vh;

  display: flex;
  align-items: center;

  @include for-tablet {
    flex-direction: column-reverse;

    padding-top: 50px;
  }

  .hero {
    &__photo {
      height: 100%;
      width: 50%;

      @include for-tablet {
        width: 100%;
        height: 50%;
      }

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

      @include for-tablet {
        width: 100%;
        max-width: 400px;

        padding: 0 25px;
      }

      &--text {
        max-width: 400px;

        @include for-tablet {
          max-width: none;
        }
      }
    }
  }
}
</style>
