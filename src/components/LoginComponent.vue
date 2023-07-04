<template>
    <h1>Login</h1>
    <div class="container-sm">
        <form @submit.prevent="userLogin" ref="loginForm">
            <div class="mb-3 ">
                <input type="text" v-model="loginInfo.userName" class="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <input type="password" v-model="loginInfo.password" class="form-control" id="exampleFormControlInput1"
                    placeholder="Password">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import store from '../store/index';
import router from '../router/index';
const loginInfo = {
    user:"",
    userName: '',
    password: ''
}
const userLogin = () => {
    // console.log("store", store.commit("setLoggedInUser", loginInfo.userName));
    const isUserExist = JSON.parse(localStorage.getItem("usersInfo") || "[]");
    if (isUserExist[0].userName === loginInfo.userName && isUserExist[0].password === loginInfo.password) {
        store.commit("setLoggedInUser",isUserExist[0].user);
        router.push('/dashboard')
        alert('valid user');
    } else {
        router.push('/login')
        alert('Invalid user')
    }
}
</script>

<style scoped></style>