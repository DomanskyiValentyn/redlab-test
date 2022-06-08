<template>
  <section id="how-we-clean-detail">
    <nav>
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

    <div class="how-we-clean-detail__tooltip">
      <img src="@/assets/how_we_clean/kitchen.jpg" alt="">

      <HowWeCleanTooltip text="Чистим фасад вытяжки" />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

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
  public ROOMS = ROOMS;

  public ROOMS_TRANSLATE = ROOMS_TRANSLATE;

  public tabs = [
    ROOMS.kitchen,
    ROOMS.rooms,
    ROOMS.bathroom,
    ROOMS.hallway,
  ];

  public activeTab = this.tabs[0];
}
</script>

<style lang="scss">
#how-we-clean-detail {
  display: flex;

  min-height: 100vh;
  width: 100%;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;

    background-color: $purple;

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

  .how-we-clean-detail__tooltip {
    position: relative;

    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }

    .how-we-clean-tooltip {
      position: absolute;
      top: 33%;
      left: 31%;
    }
  }
}
</style>
