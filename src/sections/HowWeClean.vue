<template>
  <section ref="container" id="how-we-clean">
    <div class="how-we-clean__info">
      <header ref="header">
        <h2>Как мы убираем</h2>
        <p>
          Клинер приезжает в назначенное время со всем необходимым
          и сразу приступает к делу. Вам остаётся только оценить результат.
        </p>
      </header>

      <div ref="photoContainer" class="how-we-clean__photo">
        <img ref="photo" src="@/assets/how_we_clean/kitchen.jpg" alt="">

        <div ref="tooltip" v-if="false" class="how-we-clean__tooltip">
          <HowWeCleanTooltip text="Чистим фасад вытяжки" />
        </div>
      </div>
    </div>

    <nav ref="nav">
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
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import HowWeCleanTooltip from './components/how-we-clean/Tooltip.vue';

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
  props: {

  },
})
export default class HowWeCleanDetail extends Vue {
  declare $refs: {
    header: HTMLElement;
    container: HTMLElement;
    photoContainer: HTMLDivElement;
    photo: HTMLImageElement;
    nav: HTMLElement;
    tooltip: HTMLDivElement;
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

  public animation(): void {
    const navRect = this.$refs.nav.getBoundingClientRect();

    const scrollTrigger = {
      trigger: this.$refs.container,
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub: true,
    };

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#top-header', {
      scrollTrigger,
      y: '-120%',
    });

    gsap.to(this.$refs.nav, {
      scrollTrigger,
      x: 0,
    });

    gsap.to(this.$refs.header, {
      scrollTrigger,
      y: '-100%',
    });

    gsap.to(this.$refs.photoContainer, {
      scrollTrigger,
    });

    gsap.to(this.$refs.photo, {
      scrollTrigger,
      borderRadius: 0,
      // position: 'fixed',
      y: '0',
      x: '0',
      maxHeight: '100vh',
      width: `calc(100% - ${navRect.width}px)`,
    });
  }

  mounted(): void {
    this.animation();
  }
}
</script>

<style lang="scss">
#how-we-clean {
  display: flex;
  flex-direction: column;

  position: relative;

  padding-bottom: 100px;

  min-height: 100vh;

  .how-we-clean {
    &__info {
      @include max-width-content;

      margin: 0 auto;

      header {
        display: flex;
        justify-content: space-between;

        transition: 1s all;

        margin: {
          bottom: 52px;
        };

        h2 {
          margin-right: 20px;
        }
        p {
          max-width: 414px;
        }
      }
    }

    &__photo {
      &, & img {
        transition: 2s all;
      }

      img {
        max-height: 630px;
        height: 100%;
        width: 100%;

        border-radius: 8px;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    max-width: 400px;

    background-color: $purple;

    transform: translate(-100%, 0);
    transition: 1s all;

    padding: {
      left: 60px;
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
}
</style>
