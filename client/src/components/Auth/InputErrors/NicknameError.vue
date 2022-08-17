<script setup>
const props = defineProps({
  checkObj: Object
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <template v-if="!props.checkObj.status">
      <p>{{ props.checkObj.msg }}</p>
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
