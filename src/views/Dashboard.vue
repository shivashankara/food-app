<template>
    <UserInfoComponent />
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import store from '../store/index';
import UserInfoComponent from "@/components/UserInfoComponent.vue";

onMounted(() => {
    store.dispatch("fetchData");
});

</script>

<style scoped></style>