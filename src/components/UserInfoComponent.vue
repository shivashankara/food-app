<template>
    <!-- {{ store.state.cartData }} -->
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-12">
                <h1>Welcome to {{ store.state.loggedInUser }} </h1>
            </div>
            <div class="col-12">
                <button type="button" @click="" class="btn btn-primary">Sort by Name</button>&nbsp;
                <button type="button" class="btn btn-warning">Sort by Email</button>&nbsp;
                <button type="button" class="btn btn-success">Sort by Address</button>&nbsp;
            </div>
            <div class="col-4 gy-3" v-for="(user, index) in store.state.response">
                <div class="card" style="width: 18rem;">
                    <img src="https://picsum.photos/200/100" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="card-text">{{ user.email }}</p>
                        <address>
                            <p class="card-text">{{ user.company.name }}</p>
                        </address>
                        <a href="#" class="btn btn-primary" @click.prevent="store.commit('addToCart', user)">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { any } from 'node_modules/vue-types/dist';
import store from '../store/index';

computed: {
    const sortByCondtion = () => {
        const sortedRecord = store.state.response.sort((curr: any, prev: any) => {
            if (curr.username < prev.username) { return -1; }
            if (curr.username > prev.username) { return 1; }
            return 0;

        })
        return sortedRecord;
    }

}
</script>
<style scoped></style>