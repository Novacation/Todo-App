<script setup>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import UsernameError from './InputErrors/UsernameError.vue'
import PasswordError from './InputErrors/PasswordError.vue'
import ConfirmPasswordError from './InputErrors/ConfirmPasswordError.vue'
import NicknameError from './InputErrors/NicknameError.vue'
import InputError from './InputError.vue'
import HeaderVue from './Header.vue'

const emits = defineEmits(['to-login'])

const username = ref(''),
  password = ref(''),
  confirmPassword = ref(''),
  nickname = ref('')

const usernameError = ref({}),
  passwordError = ref({}),
  confirmPasswordError = ref({}),
  nicknameError = ref({})

function toLogin() {
  emits('to-login')
  console.log(this)
}

function checkInputs() {
  let inputsOk = true
  nicknameError.value = {
    status: true
  }

  usernameError.value = {
    status: true
  }

  passwordError.value = {
    status: true
  }

  confirmPasswordError.value = {
    status: true
  }

  if (nickname.value.length < 5) {
    nicknameError.value = {
      status: false,
      msg: 'Nickname must have at least 5 characters'
    }

    inputsOk = false
  }

  if (username.value.length < 8) {
    usernameError.value = {
      status: false,
      msg: 'Username must have at least 8 characters'
    }

    inputsOk = false
  }

  if (password.value.length < 8) {
    passwordError.value = {
      status: false,
      msg: 'Password must have at least 8 characters'
    }

    inputsOk = false
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = {
      status: false,
      msg: 'Password and Confirm Password must be the same'
    }

    inputsOk = false
  }

  return inputsOk
}

async function register() {
  if (checkInputs()) {
    //send data to perform the register
    await axios({
      url: '/auth/register',
      method: 'POST',
      data: {
        nickname: nickname.value,
        username: username.value,
        password: password.value
      }
    })
  }
}
</script>

<template>
  <div
    class="w-screen overflow-y-auto h-screen sm:flex sm:flex-col sm:justify-start sm:items-center bg-gray-200">
    <div
      class="w-screen mt-4 mb-32 sm:w-3/4 sm:flex sm:flex-col sm:justify-start sm:items-center sm:shadow-md md:w-3/4 form-container">
      <header-vue />
      <main class="w-full">
        <section class="flex flex-col justify-start px-6">
          <div class="relative flex flex-col w-full mb-20">
            <input
              type="text"
              name="nickname"
              id="nickname"
              maxlength="18"
              v-model="nickname"
              class="peer text-2xl p-3 outline-none rounded shadow drop-shadow" />

            <label
              for="nickname"
              class="absolute top-3 cursor-text peer-focus:text-lg peer-focus:-top-8 peer-focus:left-0 transition-all peer-focus:text-indigo-600 font-medium text-gray-600 text-2xl"
              :class="{
                '-top-8': nickname.length > 0,
                'text-lg': nickname.length > 0,
                'text-indigo-600': nickname.length > 0,
                'left-0': nickname.length > 0,
                'left-3': nickname.length == 0
              }"
              >Nickname</label
            >

            <input-error class="mt-5" :check-obj="nicknameError" />
          </div>

          <div class="relative flex flex-col w-full mb-20">
            <input
              type="text"
              name="username"
              id="username"
              maxlength="18"
              v-model="username"
              class="peer text-2xl p-3 outline-none rounded shadow drop-shadow" />

            <label
              for="username"
              class="absolute top-3 cursor-text peer-focus:text-lg peer-focus:-top-8 peer-focus:left-0 transition-all peer-focus:text-indigo-600 font-medium text-gray-600 text-2xl"
              :class="{
                '-top-8': username.length > 0,
                'text-lg': username.length > 0,
                'text-indigo-600': username.length > 0,
                'left-0': username.length > 0,
                'left-3': username.length == 0
              }"
              >Username</label
            >

            <input-error class="mt-5" :check-obj="usernameError" />
          </div>

          <div class="relative flex flex-col w-full mb-20">
            <input
              type="password"
              name="password"
              maxlength="18"
              id="password"
              v-model="password"
              class="peer text-2xl p-3 outline-none rounded shadow drop-shadow" />

            <label
              for="password"
              class="absolute top-3 cursor-text peer-focus:text-lg peer-focus:-top-8 peer-focus:left-0 transition-all peer-focus:text-indigo-600 font-medium text-gray-600 text-2xl"
              :class="{
                '-top-8': password.length > 0,
                'text-lg': password.length > 0,
                'text-indigo-600': password.length > 0,
                'left-0': password.length > 0,
                'left-3': password.length == 0
              }"
              >Password</label
            >

            <input-error class="mt-5" :check-obj="passwordError" />
          </div>

          <div class="relative flex flex-col w-full">
            <input
              type="password"
              name="confirmPassword"
              maxlength="18"
              id="confirmPassword"
              v-model="confirmPassword"
              class="peer text-2xl p-3 outline-none rounded shadow drop-shadow" />

            <label
              for="confirmPassword"
              class="absolute top-3 cursor-text peer-focus:text-lg peer-focus:-top-8 peer-focus:left-0 transition-all peer-focus:text-indigo-600 font-medium text-gray-600 text-2xl"
              :class="{
                '-top-8': confirmPassword.length > 0,
                'text-lg': confirmPassword.length > 0,
                'text-indigo-600': confirmPassword.length > 0,
                'left-0': confirmPassword.length > 0,
                'left-3': confirmPassword.length == 0
              }"
              >Confirm password</label
            >

            <input-error class="mt-5" :check-obj="confirmPasswordError" />
          </div>

          <div class="flex flex-col justify-start items-center mt-20 mb-10">
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white w-64 font-medium shadow drop-shadow-md text-2xl p-3 rounded"
              @click="register">
              Register
            </button>

            <button
              @click="toLogin"
              class="text-2xl drop-shadow-lg mt-10 text-gray-800">
              Have an account? Login here!
            </button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200;1,300&display=swap');

#taskerTitle {
  font-family: 'Poppins', sans-serif;
}

.form-container {
  max-width: 600px;
}
</style>
