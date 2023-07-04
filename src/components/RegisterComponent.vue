<template>
  <h1>Register </h1>
  <div class="container-sm">
    <!-- {{ store.state.loggedInUser }}  -->
    <form @submit.prevent="handleRegister()" ref="regForm">
      <div class="mb-3 ">
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Enter Your Name" v-model="registrationData.userName"
            required>
        </div>
        <input type="text" class="form-control" placeholder="name@example.com" v-model="registrationData.email" required>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Enter Password" v-model="registrationData.password" required>
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Confirm password" v-model="registrationData.confirmPass"
          required>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import router from '../router/index';
import store from '../store/index';
import { required, email, minLength } from '@vuelidate/validators';

import { ref } from 'vue'
const regForm = ref<HTMLFormElement>();

const validations = () => {
  return {
    form: {
      userName: required,
      email: {
        required, email
      },
      password: {
        required,
        min: minLength(6)
      },
    },
  }
}
const registrationData = {
  userName: "",
  email: "",
  password: "",
  confirmPass: "",
}

const resetField = () => {
  registrationData.userName = "";
  registrationData.email = "";
  registrationData.confirmPass = "";
  registrationData.password = ""
}
const handleRegister = () => {
  const usersInfo:any =[]
  if (registrationData.password === registrationData.confirmPass) {
    usersInfo.push({userName:registrationData.email, password:registrationData.password, user:registrationData.userName})
    localStorage.setItem("usersInfo",JSON.stringify(usersInfo));
    alert(`Thank you ${registrationData.userName} for Registration`);
    router.push('/login');
  } else {
    registrationData.confirmPass = "";
    alert(`Confirm password is not match`);
    router.push('/register');
  }
}

</script>
<style scoped></style>