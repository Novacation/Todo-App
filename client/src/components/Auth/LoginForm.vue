<script setup>
import { ref } from '@vue/reactivity'
import HeaderVue from './Header.vue'

const emits = defineEmits(['to-register'])

const username = ref(''),
  password = ref('')

const toRegister = () => {
  emits('to-register')
}
</script>

<template>
  <div
    class="w-screen h-screen sm:flex flex-col justify-center items-center bg-gray-200">
    <div
      class="w-screen h-screen sm:w-3/4 sm:h-4/5 sm:flex sm:flex-col sm:justify-center sm:items-center shadow-md md:w-3/4 form-container">
      <header-vue />
      <main class="w-full">
        <section class="flex flex-col justify-start px-6">
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
          </div>

          <div class="relative flex flex-col w-full">
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
          </div>

          <div class="flex flex-col justify-start items-center mt-20">
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white w-64 font-medium shadow drop-shadow-md text-2xl p-3 rounded">
              Login
            </button>

            <button
              @click="toRegister"
              class="text-2xl drop-shadow-lg mt-10 text-gray-800">
              Don't have an account? Register here!
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
