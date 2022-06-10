<template>
  <div
    ref="container"
    class="order-cleaning"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <button ref="button" class="order-cleaning--button" @mousemove="mouseMove">
      <span ref="text">Заказать <br />уборку</span>
      <span class="border"></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

@Options({
  components: {},
  props: {},
})
export default class OrderCleaning extends Vue {
  declare $refs: {
    container: HTMLDivElement,
    button: HTMLButtonElement;
    text: HTMLSpanElement;
  };

  public mouseMove(e: any): void {
    this.moveText(e);

    this.moveButton(e);
  }

  private moveText(e: any): void {
    const rect = this.$refs.container.getBoundingClientRect();

    gsap.to(this.$refs.text, {
      x: e.layerX * 0.2,
      y: (e.layerY - (rect.height / 2)) * 0.15,
    });
  }

  private moveButton(e: any): void {
    const rect = this.$refs.container.getBoundingClientRect();

    gsap.to(this.$refs.button, {
      x: e.layerX * 0.3,
      y: (e.layerY - (rect.height / 2)) * 0.25,
    });
  }

  public mouseEnter(): void {
    gsap.to(this.$refs.container, { scale: 1, y: 0, ease: 'none' });
  }

  public mouseLeave(): void {
    const rect = document.getElementById('cards')!.getBoundingClientRect();

    const config = rect.y >= (window.innerHeight + 73) ? { scale: 1, y: 0 } : { scale: 0.8, y: 50 };

    gsap.to(this.$refs.container, config);

    gsap.to(this.$refs.button, { x: 0, y: 0 });

    gsap.to(this.$refs.text, { x: 0, y: 0 });
  }

  public animation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.$refs.text, {
      rotation: 360,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(this.$refs.container, {
      scrollTrigger: {
        trigger: '#cards',
        start: 'top bottom',
        end: 'top bottom',
        scrub: true,
      },
      scale: 0.8,
      y: 50,
      duration: 1,
    });

    gsap.to(this.$refs.container, {
      scrollTrigger: {
        trigger: '#how-we-clean',
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: true,
      },
      y: 210,
      ease: 'none',
      duration: 1,
    });
  }

  mounted(): void {
    this.animation();
  }
}
</script>

<style lang="scss">
.order-cleaning {
  display: block;

  position: fixed;
  bottom: 10px;
  left: 50%;
  z-index: 50;

  transition: 1s all;

  transform: translate(-50%);

  @include strict_size(195px, 195px);

  &--button {
    width: 100%;
    height: 100%;

    text-align: center;

    background-color: $purple;

    border-radius: 100%;

    &::after {
      content: '';

      display: block;

      position: absolute;
      top: 0;
      left: 0;

      z-index: 10;

      width: 100%;
      height: 100%;
    }

    span {
      display: inline-block;

      position: relative;
      z-index: 6;

      color: $white;

      @include font_btn_primary_text;
    }

    .border {
      display: block;

      background-color: $purple;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;

      width: 100%;
      height: 100%;

      border-radius: 100%;

      transition: $trs;

      &::before {
        content: '';

        position: absolute;
        top: -2px;
        left: -2px;

        width: 100%;
        height: 100%;

        border: 1px solid $white;
        border-radius: 100%;

        transition: $trs;

        opacity: 0;
      }
    }

    &:hover {
      .border {
        transform: scale(1.2);

        &::before {
          transform: scale(1.6);

          opacity: 0.3;
        }
      }
    }
  }
}
</style>
