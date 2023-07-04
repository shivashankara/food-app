<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
   
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <font-awesome-icon icon="home" />Food App
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav">

        <li class="nav-item" class-active="active">
          <RouterLink v-if="!(store.state.isLoggedIn)" to="/login" class="nav-link">
            Login
          </RouterLink>
        </li>
        <li class="nav-item" class-active="active">
          <RouterLink v-if="(store.state.isLoggedIn)" to="/cart" class="nav-link">
            <div style="position:relative">
              <img src="../assets/Images/cart.png" width="34" height="34" alt="cart">
              <div class="cart-count" v-if="store.state.cartData.length > 0" >{{store.state.cartData.length}}</div>
            </div>
          </RouterLink>
        </li>
        <li class="nav-item" class-active="active">
          <RouterLink v-if="(store.state.isLoggedIn)" to="/dashboard" class="nav-link">
           Dashboard
          </RouterLink>
        </li>
        <li v-if="!(store.state.isLoggedIn)" class="nav-item" class-active="active">
          <RouterLink to="/register" class="nav-link">
            Register
          </RouterLink>

        </li>
        <li class="nav-item" @click="store.commit('logout')" class-active="active">
          <RouterLink v-if="store.state.isLoggedIn" to="/login" class="nav-link">
            logout
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>    

<script setup  lang="ts">
import store from '../store/index';
</script>

<style scoped>
nav li:hover,
nav li:active {
  background-color: indianred;
  cursor: pointer;
}
.cart-count{
  background: red;
    border-radius: 34px;
    color: white;
    width: 16px;
    font-weight: bold;
    height: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: -9px;
    right: 2px;
    font-size: 12px;
}
</style>