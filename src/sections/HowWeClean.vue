<template>
  <section id="how-we-clean">
    <div class="how-we-clean__container">
      <header>
        <h2>Как мы убираем</h2>
        <p>
          Клинер приезжает в назначенное время со всем необходимым
          и сразу приступает к делу. Вам остаётся только оценить результат.
        </p>
      </header>

      <img src="@/assets/how_we_clean/kitchen.jpg" alt="">
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
export default class extends Vue {

}
</script>

<style lang="scss">
section#how-we-clean {

  .how-we-clean__container {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1094px;
    margin: 0 auto;

    header {
      display: flex;
      justify-content: space-between;

      h2 {
        margin-right: 20px;
      }

      p {
        max-width: 414px;
      }
    }

    img {
      width: 100%;
      max-height: 630px;

      border-radius: 8px;

      margin-top: 52px;
    }
  }
}
</style>
