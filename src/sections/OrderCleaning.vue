<template>
  <button
    ref="button"
    class="order-cleaning"
    :class="{ scroll: isPageScroll }">
      Заказать <br /> уборку
    </button>
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
  declare $refs: {
    button: HTMLButtonElement;
  }

  public isPageScroll = false;

  public watchScroll(): void {
    this.isPageScroll = !!window.scrollY;
  }

  mounted(): void {
    document.addEventListener('scroll', this.watchScroll);
  }
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

  color: $white;

  animation: btn_order_cleaning 30s linear infinite;

  transition: 1s all;

  &, &:hover, &.scroll:hover {
    @include strict_size(195px, 195px);

    @include font_btn_primary_text;
  }

  &.scroll {
    bottom: -30px;

    @include strict_size(150px, 150px);

    font-size: 14px;
    line-height: 19px;
  }
}
</style>
