<template>
  <header ref="header" class="top-header" :class="{ scroll: isPageScroll }">
    <Logo />

    <div class="top-header__toggle" :class="toggle">
      <button
        class="house"
        :class="{ active: toggle === TOGGLE.house }"
        @click="toggle = TOGGLE.house"
      >
        Дом
      </button>
      <button
        class="office"
        :class="{ active: toggle === TOGGLE.office }"
        @click="toggle = TOGGLE.office"
      >
        Офис
      </button>
    </div>

    <nav class="top-header__links">
      <template v-for="(link, index) in links" :key="index">
        <li><a :href="link.href">{{ link.title }}</a></li>
      </template>
    </nav>

    <div class="top-header__contact-info">
      <p><b>+380 67 401 69 77</b></p>
      <span class="separator"></span>
      <p><b>24/7</b></p>
    </div>

    <button class="top-header__menu"></button>

  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Logo from '@/common/Logo.vue';

enum TOGGLE {
  house = 'house',
  office = 'office',
}

@Options({
  components: {
    Logo,
  },
})
export default class Header extends Vue {
  declare $refs: {
    header: HTMLElement;
  }

  public TOGGLE = TOGGLE;

  public isPageScroll = false;

  public links = [
    {
      title: 'После ремонта',
      href: '#0',
    },
    {
      title: 'Генеральная уборка',
      href: '#0',
    },
    {
      title: 'Регулярная уборка',
      href: '#0',
    },
    {
      title: 'Мойка окон',
      href: '#0',
    },
  ];

  public toggle = TOGGLE.house;

  private checkScroll(): void {
    this.isPageScroll = !!window.scrollY;
  }

  mounted(): void {
    this.checkScroll();

    document.addEventListener('scroll', this.checkScroll);
  }
}
</script>

<style lang="scss">
$toggle_house_weight: 55px;
$toggle_office_weight: 65px;
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;

  @include strict_size($top_header_height, 100%);

  padding: {
    top: 22px;
    bottom: 22px;
    left: 54px;
    right: 36px;
  };

  &.scroll {
    background-color: $white;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.07);
  }

  svg.logo {
    @include strict_size(25px, false);
  }

  &__toggle {
    display: flex;
    align-items: center;
    gap: 0 4px;

    position: relative;

    background-color: $white;

    border-radius: 48px;

    padding: 2px;

    &::before {
      display: block;

      content: '';

      position: absolute;
      top: 0;

      height: 100%;

      background-color: $purple;

      border-radius: 34px;

      transition: $trs;
    }

    &.house::before {
      left: 2px;

      width: $toggle_house_weight;
    }

    &.office::before {
      left: calc($toggle_house_weight + 4px + 2px);

      width: $toggle_office_weight;
    }

    button {
      position: relative;
      z-index: 1;

      min-height: 31px;

      padding: 8px 12px;

      border-radius: 34px;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 15px;

      transition: $trs;

      // background-color: #fff;

      &.active {
        color: $white;
      }

      &.house {
        @include strict_size(false, $toggle_house_weight);
      }

      &.office {
        @include strict_size(false, $toggle_office_weight);
      }
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 32px;

    li a {
      @include font_menu-text;

      transition: $trs;

      &:hover {
        color: $purple;
      }
    }
  }

  &__contact-info {
    display: flex;
    align-items: center;
    gap: 15px;

    span.separator {
      display: inline-block;

      @include strict_size(14px, 2px);

      background-color: $black;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include strict_size(10px, 22px);

    &::before, &::after {
      content: '';

      display: block;

      @include strict_size(2px, 100%);

      background-color: $black;
      border-radius: 2px;
    }
  }
}
</style>
