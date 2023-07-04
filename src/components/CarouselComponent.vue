<template>
    <div class="container">
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
           <div class="carousel-inner">
             <div class="carousel-item">
               <img src="../assets/Images/Slider1.jpg" alt="" height="500px" width="1200px">
             </div>
             <div class="carousel-item">
              <img src="../assets/Images/Slider2.jpg" alt="" height="500px" width="1200px">
             </div>
             <div class="carousel-item active">
              <img src="../assets/Images/Slider3.jpg" alt="" height="500px" width="1200px">
             </div>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
         </div>
    </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CarouselComponent',
    //   props: {
    //     msg: String,
    //   },
});
</script>
<style scoped></style>