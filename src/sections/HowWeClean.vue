<template>
  <section id="how-we-clean" class="how-we-clean">
    <header ref="header">
      <h2>Как мы убираем</h2>

      <p>
        Клинер приезжает в назначенное время со всем необходимым
        и сразу приступает к делу. Вам остаётся только оценить результат.
      </p>
    </header>

    <div ref="photoContainer" class="how-we-clean__photo">
      <div ref="photo" class="how-we-clean__photo--tooltip">
        <img src="@/assets/how_we_clean/kitchen.jpg" alt="how we clean">
      </div>
    </div>
  </section>

  <nav ref="nav" class="how-we-clean__nav">
    <template v-for="(tab, index) in tabs" :key="index">
      <li>
        <button @click="activeTab = tab">
          <template v-if="activeTab === tab">
            →
          </template>
          {{ ROOMS_TRANSLATE[tab] }}
        </button>
      </li>
    </template>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import HowWeCleanTooltip from '@/sections/components/how-we-clean/Tooltip.vue';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

enum ROOMS {
  kitchen = 'kitchen',
  rooms = 'rooms',
  bathroom = 'bathroom',
  hallway = 'hallway',
}

enum ROOMS_TRANSLATE {
  kitchen = 'Кухня',
  rooms = 'Комнаты',
  bathroom = 'Ванная',
  hallway = 'Прихожая',
}

@Options({
  components: {
    HowWeCleanTooltip,
  },
  props: {},
})
export default class HowWeClean extends Vue {
  declare $refs: {
    header: HTMLElement;
    photoContainer: HTMLElement;
    photo: HTMLElement;
    nav: HTMLElement;
  }

  public ROOMS = ROOMS;

  public ROOMS_TRANSLATE = ROOMS_TRANSLATE;

  public tabs = [
    ROOMS.kitchen,
    ROOMS.rooms,
    ROOMS.bathroom,
    ROOMS.hallway,
  ];

  public activeTab = this.tabs[0];

  private animation(): void {
    const scrollTrigger: ScrollTrigger.Vars = {
      trigger: this.$refs.photoContainer,
      start: 'bottom bottom',
      end: 'top top',
      scrub: true,
    };

    const containerRect = this.$refs.photoContainer.getBoundingClientRect();
    const navRect = this.$refs.nav.getBoundingClientRect();

    gsap.set([this.$refs.photo, this.$refs.photoContainer], {
      height: window.innerHeight,
      minHeight: window.innerHeight,
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.$refs.header, { scrollTrigger, y: -150, ease: 'none' });

    gsap.to('#top-header', { scrollTrigger, y: -150, ease: 'none' });

    gsap.to(this.$refs.nav, { scrollTrigger, x: '0', ease: 'none' });

    gsap.to('#order-cleaning', { scrollTrigger, y: 200, ease: 'none' });

    gsap.to(this.$refs.photo, {
      scrollTrigger,
      position: 'fixed',
      top: 0,
      left: containerRect.left,
      width: `calc(100vw - ${navRect.width}px)`,
      x: -(containerRect.left - navRect.width),
    });
  }

  mounted(): void {
    if (window.innerWidth >= 1080) {
      this.animation();
    }
  }
}
</script>

<style lang="scss">
.how-we-clean {
  @include max-width-content;

  header {
    display: flex;
    justify-content: space-between;

    transition: 1s all;

    margin: 0 20px;

    margin-bottom: 52px;

    @include for-tablet {
      flex-direction: column;
    }

    h2 {
      margin-right: 20px;

      @include for-tablet {
        margin-bottom: 20px;
      }
    }
    p {
      max-width: 414px;
    }
  }

  &__nav {
    position: fixed;
    left: 0;
    top: 0;

    min-width: 415px;

    transform: translateX(calc(-100% - 70px));

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: $purple;

    height: 100%;

    transition: 1s all;

    padding: {
      left: 60px;
      right: 70px;
    };

    li {
      button {
        font-style: italic;
        font-weight: 400;
        font-size: 44px;
        line-height: 53px;

        color: $white;

        opacity: 0.7;

        transition: $trs;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  &__photo {
    width: 100%;
    min-height: 100vh;

    @include for-tablet {
      min-height: auto;
    }

    &--tooltip {
      transition: 1s all;

      img {
        height: 100%;
        width: 100%;

        @include for-tablet {
          min-height: auto;
        }
      }
    }
  }
}
</style>
