<template>
  <NavBarComponent />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBarComponent from './components/NavBarComponent.vue';

export default defineComponent({
  components: {
    NavBarComponent,
  }
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
