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
      <img ref="photo" src="@/assets/how_we_clean/kitchen.jpg" alt="how we clean">
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
  components: {},
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

  get distance(): number {
    console.log(12);

    return 12;
  }

  private animation(): void {
    const scrollTrigger: ScrollTrigger.Vars = {
      trigger: this.$refs.photoContainer,
      start: '25% center',
      end: '25% center',
      markers: true,
      scrub: true,
    };

    gsap.set(this.$refs.photo, { height: window.innerHeight });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.$refs.header, { scrollTrigger, y: -150, ease: 'none' });

    gsap.to('#top-header', { scrollTrigger, y: -150, ease: 'none' });

    gsap.to(this.$refs.nav, { scrollTrigger, x: '0', ease: 'none' });

    gsap.to('#order-cleaning', { scrollTrigger, y: 200, ease: 'none' });

    gsap.to(this.$refs.photo, {
      scrollTrigger,
    });
  }

  mounted(): void {
    this.animation();
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

  &__nav {
    position: fixed;
    left: 0;
    top: 0;

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
    min-height: 100vh;
    width: 100%;

    img {
      transition: 1s all;

      height: 100%;
      width: 100%;

      min-height: 100vh;
    }
  }
}
</style>
