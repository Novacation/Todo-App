<script setup>
import { ref } from 'vue'
import LoginForm from '../components/Auth/LoginForm.vue'
import RegisterForm from '../components/Auth/RegisterForm.vue'

const isLoginSelected = ref(true)

const toRegister = () => {
  isLoginSelected.value = false
}

const toLogin = () => {
  isLoginSelected.value = true
}
</script>

<template>
  <Transition name="fade" mode="out-in">
    <template v-if="isLoginSelected">
      <login-form @to-register="toRegister" />
    </template>

    <template v-else>
      <register-form @to-login="toLogin" />
    </template>
  </Transition>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
