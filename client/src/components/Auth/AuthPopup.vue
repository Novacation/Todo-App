<script setup>
import { ref } from 'vue'
import checkIcon from '@/assets/checkIcon.svg'
import warning from '@/assets/warning.svg'

const { popUpState } = defineProps({
  popUpState: Object
})

const animateTimeout = ref(false)

setTimeout(() => {
  animateTimeout.value = true
}, 100)
</script>

<template>
  <Transition name="fade" mode="out-in">
    <template #default v-if="animateTimeout">
      <div
        class="fixed flex flex-col justify-start items-center modal w-screen h-screen top-0 left-0">
        <div
          class="flex flex-col items-center justify-center popup-message bg-gray-200 font-bold p-6 rounded shadow-sm drop-shadow-sm w-2/3 text-2xl">
          <img
            class="w-2/4"
            :src="popUpState.status == true ? checkIcon : warning"
            alt="" />

          <p
            class="mt-10"
            :class="{
              'text-red-700': !popUpState.status,
              'text-green-700': popUpState.status
            }">
            {{ popUpState.message }}
          </p>
        </div>
      </div>
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
  transition: opacity 0.2s ease-in-out;
}

.modal {
  background-color: rgba(27, 27, 27, 0.473);
}

.popup-message {
  margin-top: 25vh;
}
</style>
