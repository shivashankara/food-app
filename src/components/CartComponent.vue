<template>
   
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-12">
                <h1>Product list</h1>
            </div>
            <div class="col-4 gy-3" v-for="(user, index) in store.state.cartData">
                <div class="card" style="width: 18rem;">
                    <img src="https://picsum.photos/200/100" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="card-text">{{ user.email }}</p>
                        <address>
                            <p class="card-text">{{ user.company.name }}</p>
                        </address>
                        <a href="#" class="btn btn-danger" @click.prevent="store.commit('removeFromCart', user)">Remove</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import store from "../store/index"
</script>
<style scoped>
</style>