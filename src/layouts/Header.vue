<template>
  <header ref="header" id="top-header" class="top-header" :class="{ scroll: isPageScroll }">
    <div class="top-header__logo">
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
    </div>

    <nav class="top-header__links">
      <template v-for="(link, index) in links" :key="index">
        <li><a :href="link.href">{{ link.title }}</a></li>
      </template>
    </nav>

    <div class="top-header__info">
      <div class="top-header__contact-info">
        <p><b>+380 67 401 69 77</b></p>
        <span class="separator"></span>
        <p><b>24/7</b></p>
      </div>

      <button class="top-header__menu"></button>
    </div>

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

  private watchScroll(): void {
    this.isPageScroll = !!window.scrollY;
  }

  mounted(): void {
    this.watchScroll();

    document.addEventListener('scroll', this.watchScroll);
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

  padding: {
    top: 22px;
    bottom: 22px;
    left: 54px;
    right: 36px;
  };

  transition: 1s all ;

  @include strict_size($top_header_height, 100%);

  background: rgba($color: $white, $alpha: 0);

  transition: $trs;

  &.scroll {
    background-color: $white;

    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.07);

    .top-header__toggle {
      border-color: $middle_grey;
    }
  }

  svg.logo {
    @include strict_size(25px, false);

    margin-right: 20px;
  }

  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__toggle {
    display: flex;
    align-items: center;
    gap: 0 4px;

    position: relative;

    background-color: $white;

    border: 1px solid $white;
    border-radius: 48px;

    padding: 2px;

    transition: $trs;

    @include for-custom(820px) {
      display: none;
    }

    &::before {
      display: block;

      content: '';

      position: absolute;
      top: 2px;

      height: 31px;

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

      &:hover {
        background-color: $purple_10p;
        color: $purple;
      }

      &.active {
        color: $white;
      }

      &.house {
        @include strict_size(31px, $toggle_house_weight);
      }

      &.office {
        @include strict_size(31px, $toggle_office_weight);
      }
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 32px;

    @include for-custom(1440px) {
      display: none;
    }

    li a {
      @include font_menu-text;

      transition: $trs;

      &:hover {
        color: $purple;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;

    button {
      margin-left: 25px;
    }
  }

  &__contact-info {
    display: flex;
    align-items: center;
    gap: 15px;

    @include for-custom(820px) {
      display: none;
    }

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
