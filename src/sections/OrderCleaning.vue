<template>
  <button class="order-cleaning">Заказать <br /> уборку</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
  props: {

  },
})
export default class OrderCleaning extends Vue {

}
</script>

<style lang="scss">
button.order-cleaning {
  display: block;

  position: fixed;
  bottom: 10px;
  left: 50%;
  z-index: 50;

  text-align: center;

  background-color: $purple;

  border-radius: 100%;

  @include strict_size(195px, 195px);

  color: $white;

  animation: btn_order_cleaning 30s linear infinite;
}
</style>
