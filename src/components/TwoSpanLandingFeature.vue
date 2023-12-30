<script setup>
const props = defineProps(['title', 'text', 'icon'])
</script>

<template>
  <div class="rounded-2xl grid grid-cols-[52%_50%]" style="background: #EDF3F4;">
    <div class="p-8">
      <div class="w-20 h-20 flex justify-center items-center rounded-2xl" style="background: #E1E7E7">
        <img alt="" class="w-11 h-11" :src="props.icon"/>
      </div>
      <H3 class="text-2xl font-medium mt-4">{{props.title}}</H3>
      <p class="mt-2 text-lg">{{props.text}}</p>
    </div>
    <img src="/public/illustrations/timetable_feature.png" alt=""  width="318" height="369"/>
  </div>
</template>

<style scoped>

</style>