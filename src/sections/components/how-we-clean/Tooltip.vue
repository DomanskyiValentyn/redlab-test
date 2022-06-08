<template>
  <div class="how-we-clean-tooltip">
    <div v-if="open" class="how-we-clean-tooltip__text">
      <p class="caption w-s-nw">{{ $props.text }}</p>
    </div>

    <button class="how-we-clean-tooltip__event" @mouseenter="open = true" @mouseleave="open = false" :class="{ open }">
      <IconPlus />
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import IconPlus from '@/common/icons/Plus.vue';

@Options({
  components: {
    IconPlus,
  },
  props: {
    text: String,
  },
})
export default class HowWeCleanTooltip extends Vue {
  public open = false;
}
</script>

<style lang="scss">
.how-we-clean-tooltip {
  @include strict_size(1px, 1px);

  &__text {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -45px;
    left: 0;
    transform: translate(-50%, -50%);

    background-color: $white;

    border-radius: 8px;

    padding: 0 10px;

    min-height: 33px;

    &::before {
      content: '';

      display: block;

      position: absolute;
      bottom: -8px;
      left: 50%;

      transform: translate(-50%);

      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;

      border-top: 8px solid $white;
    }
  }

  &__event {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    @include strict_size(30px, 30px);

    background-color: $purple;

    border-radius: 100%;

    transform: translate(-50%, -50%);

    &::before {
      content: '';

      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      display: block;

      @include strict_size(30px, 30px);

      background-color: $purple;

      border-radius: 100%;

      animation: pulse 2.3s linear infinite;
    }

    svg {
      @include strict_size(12px, 12px);

      transition: $trs;
    }

    &.open {
      svg {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
