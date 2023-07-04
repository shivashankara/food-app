<template>
    <div class="container">
        <CarouselComponent />
    </div>
</template>
<script  lang="ts">
import { defineComponent } from 'vue';

import CarouselComponent from '@/components/CarouselComponent.vue';

export default defineComponent({
    components: { CarouselComponent }
})

</script>