<script setup>

</script>

<template>
  <div class="pt-24 mt-14">
    <h1 class="text-4xl font-bold text-center mb-20">Выберите подходящий тарифный план</h1>
    <div class="flex items-center align-middle justify-center">
      <div class="rounded-3xl p-8 relative" style="width: 288px; height: 429px; background: white">
        <p class="font-bold text-2xl">Free</p>
        <p class="font-medium text-md text-gray-950">Для ознакомления.</p>

        <div class="absolute bottom-5">
          <p class="font-bold text-3xl text-gray-700 mt-16">0 руб.</p>
          <p class="font-bold text-lg mt-3">В тариф входит</p>
          <ul class="mt-2 h-36">
            <li class="flex align-middle my-2">
              <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
              <span class="ms-2">90 МБ хранилища</span>
            </li>
            <li class="flex align-middle my-2">
              <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
              <span class="ms-2">до 15 человек</span>
            </li>
            <li class="flex align-middle my-2">
              <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
              <span class="ms-2">Базовые функции</span>
            </li>
          </ul>
          <button
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button">
            Приобретено
          </button>
        </div>
      </div>
      <div class="p-8 ms-8 flex align-middle rounded-3xl" style="background-color: #F4F4F4;">
        <div class="rounded-3xl p-8 relative" style="width: 288px; height: 429px; background: white;">
          <p class="font-bold text-2xl">Lite</p>
          <p class="font-medium text-md text-gray-950">Для небольших заведений.</p>

          <div class="absolute bottom-5">
            <p class="mt-16">
              <span class="font-bold text-3xl text-gray-700">9 800 руб. </span>
              <span class="text-base">/ в год</span>
            </p>
            <p class="font-bold text-lg mt-3">В тариф входит</p>
            <ul class="mt-2 h-36">
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">650 МБ хранилища</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">до 600 человек</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">Все функции</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">Резервное копирование</span>
              </li>
            </ul>
            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
              Оформить
            </button>
          </div>
        </div>
        <div class="rounded-3xl p-8 relative ms-8"
             style="width: 288px; height: 429px;
             background: white;
             box-shadow: 0px 0px 30px 0px rgba(10,10,10,0.2);
             border: 3px solid #3473E1;
              ">
          <p class="font-bold text-2xl">Pro</p>
          <p class="font-medium text-md text-gray-950">Для средних и больших заведений.</p>

          <div class="absolute bottom-5">
            <p class="font-medium text-xl text-gray-700 mt-16">
              <span class="font-bold text-3xl text-gray-700">24 600 руб. </span>
              <span class="text-base">/ в год</span>
            </p>
            <p class="font-bold text-lg mt-3">То, что даёт Lite, плюс</p>
            <ul class="mt-2 h-36">
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">50  ГБ хранилища</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">до 15 000 человек</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">Сторонние интеграции</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2">Поддержка 24/7</span>
              </li>
            </ul>
            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
              Оформить
            </button>
          </div>
        </div>

        <div class="rounded-3xl ms-8 p-8 relative" style="width: 288px; height: 429px; background: white;">
          <p class="font-bold text-2xl">Individual</p>
          <p class="font-medium text-md text-gray-950">Настройте тариф под свои нужды.</p>

          <div class="absolute bottom-5">
              <span class="font-bold text-2xl text-gray-700">Свяжитесь с нами</span>
            <ul class="mt-4 h-44">
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2 ">Приоритетная поддержка</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2 ">Расширенное хранилище</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2 ">до 1 млн человек</span>
              </li>
              <li class="flex align-middle my-2">
                <span class="material-symbols-outlined" style="color:#2A5593;">file_download_done</span>
                <span class="ms-2 ">Ранний доступ к новым функциям </span>
              </li>
            </ul>
            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
              Оформить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>