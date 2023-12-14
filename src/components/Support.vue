<script setup>
import {FwbButton, FwbModal} from "flowbite-vue";
import {onBeforeMount, ref} from "vue";
import emitter from 'tiny-emitter/instance';

onBeforeMount(() => {
  emitter.emit('navbar-theme', 'light');
})

const isShowModal = ref(false)

function onSubmitClick() {
  isShowModal.value = true
}

function onDialogClose() {
  isShowModal.value = false
}
</script>

<template>

  <fwb-modal v-if="isShowModal" @close="onDialogClose">
    <template #header>
      <div class="flex items-center text-lg">
        Письмо успешно отправлено
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Спасибо за обращение! Среднее время ответа - 2 дня.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <fwb-button class="bg-blue-700" @click="onDialogClose">
          ОК
        </fwb-button>
      </div>
    </template>
  </fwb-modal>

  <div class="pt-24 mt-14">
    <h1 class="text-4xl font-bold text-center mb-12">Есть вопрос? Напишите нам!</h1>

    <form class="max-w-sm mx-auto">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email-address-icon">Почта</label>
      <div class="relative mb-3">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor"
               viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input id="email-address-icon"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@youremail.com"
               type="text">
      </div>
      <div class="mb-3">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="base-input">Имя</label>
        <input id="base-input"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               type="text">
      </div>
      <div class="mb-3">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="base-input">Тема
          вопроса</label>
        <input id="base-input"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               type="text">
      </div>

      <div class="mb-3">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="message">Сообщение</label>
        <textarea id="message"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Текст сообщения..."
                  rows="4"></textarea>
      </div>
      <button
          class="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click="onSubmitClick()">
        Отправить письмо
      </button>
    </form>

  </div>
</template>

<style scoped>

</style>