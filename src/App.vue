<template>
  <Header />

  <OrderCleaning />

  <Hero />
  <Cards />
  <HowWeClean />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from '@/layouts/Header.vue';

import OrderCleaning from '@/sections/OrderCleaning.vue';

import Hero from '@/sections/Hero.vue';
import Cards from '@/sections/Cards.vue';
import HowWeClean from '@/sections/HowWeClean.vue';

@Options({
  components: {
    Header,
    OrderCleaning,
    Hero,
    Cards,
    HowWeClean,
  },
})
export default class App extends Vue {}
</script>
