<template>
  <h1>Welcome to Restaurant </h1>
  <CarouselComponent />
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CarouselComponent from '../components/CarouselComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CarouselComponent
  },
});
</script>
