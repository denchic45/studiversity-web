<script setup>
const props = defineProps(['title', 'text', 'icon'])
</script>

<template>
  <div class="p-8 w-96 rounded-2xl" style="background: #EDF3F4">
    <div class="w-20 h-20 flex justify-center items-center rounded-2xl" style="background: #E1E7E7">
      <img alt="" class="w-11 h-11" :src="props.icon"/>
    </div>
    <H3 class="text-2xl font-semibold mt-4">{{props.title}}</H3>
    <p class="mt-2 text-lg font-medium">{{props.text}}</p>
  </div>
</template>

<style scoped>

</style>