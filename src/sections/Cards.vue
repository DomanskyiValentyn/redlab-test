<template>
  <section id="cards">
    <div class="cards--container">
      <template v-for="(card, index) in cards" :key="index">
        <div class="card">
          <div
            class="card__info wow animate__fadeInUp animate__animated"
            :class="card.className"
            :data-wow-delay="card.delay"
            data-wow-offset="100"
          >
            <h4>{{ card.title }}</h4>

            <img :src="methods.getPhotoFromAssets(`cards/${card.photo}.png`)" alt="">
          </div>

          <div class="card__description">
            <p>{{ card.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import methods from '@/utils/methods';

@Options({
  components: {

  },
  props: {

  },
})
export default class SectionCards extends Vue {
  private description = `
    Не нужно тратить время, силы и ресурсы
    на размещение вакансий, проведение
    собеседований, проверку кандидатов на
    должность уборщицы. За счет больших объемов мы можем
    сделать это эффективнее.`;

  public cards = [
    {
      title: 'Тщательно отобранный персонал',
      photo: 'personal',
      className: 'personal',
      delay: '0s',
      description: this.description,
    },
    {
      title: 'Качественная эко-химия',
      photo: 'chemistry',
      className: 'chemistry',
      delay: '0.1s',
      description: this.description,
    },
    {
      title: 'Контролируем качество',
      photo: 'quality',
      className: 'quality',
      delay: '0.15s',
      description: this.description,
    },
    {
      title: 'Работаем круглосуточно',
      photo: 'around_the_clock',
      className: 'around-the-clock',
      delay: '0.2s',
      description: this.description,
    },
  ];

  public methods = methods;
}
</script>

<style lang="scss">
section#cards {
  margin: 0 60px;

  .cards--container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    @include for-custom(1440px) {
      justify-items: center;
      grid-template-columns: repeat(2, 1fr);

      max-width: 640px;
      margin: 0 auto;
    }

    @include for-mobile {
      grid-template-columns: 1fr;
    }

    .card {
      position: relative;

      border-radius: 8px;

      @include strict_size(328px, 300px);

      overflow: hidden;

      &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        width: 100%;
        height: 100%;

        padding: {
          top: 20px;
        };

        background-color: $light_grey;

        h4 {
          max-width: 219px;

          text-align: center;
        }

        &.personal {
          img {
            @include strict_size(151px, 151px);
          }
        }

        &.chemistry {
          img {
            @include strict_size(155px, 188px);
          }
        }

        &.quality {
          img {
            @include strict_size(175px, 211px);
          }
        }

        &.around-the-clock {
          img {
            @include strict_size(148px, 202px);
          }
        }
      }

      &__description {
        position: absolute;
        left: 0;
        top: 0;

        opacity: 0;

        height: 100%;
        width: 100%;

        background-color: $purple;

        padding: 30px;

        p {
          color: $white;
        }
      }
    }
  }
}
</style>
