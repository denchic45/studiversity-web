<script setup>
import LandingFeature from "./LandingFeature.vue";
import TwoSpanLandingFeature from "./TwoSpanLandingFeature.vue";
import emitter from 'tiny-emitter/instance';
import {onBeforeMount} from 'vue'

onBeforeMount(() => {
  console.log('emitting dark')
  emitter.emit('navbar-theme', 'dark');
})
</script>
<template>
  <div>
    <section class="relative dark bg-stone-950 grid grid-cols-2 px-60 py-72">
      <div class="z-10 w-max">
        <h1 class="text-6xl font-bold dark:text-white leading-snug">
          Образовательная платформа
          <br>
          для учебных заведений
        </h1>
        <p class="mt-5 text-xl tracking-tight text-gray-600 dark:text-gray-300">
          Доступно на Windows, Mac, Linux, Android
        </p>
        <div class="mt-8 flex fle">
          <a href="https://apps.rustore.ru/app/com.denchic45.studiversity" target="_blank">
            <img alt="image description" class="" height="445" src="/public/images/rustore_badge_black.png"
                 width="134"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.denchic45.studiversity" target="_blank">
            <img alt="image description" class=" mx-6" height="445" src="/public/images/google_play_badge.png"
                 width="151"/>
          </a>

          <a href="https://drive.google.com/file/d/1Kp6V70-1kTB5uHoAOQXAyKtVD5uEpu6l/view?usp=sharing" target="_blank">
            <button class="py-3 px-5 me-2 text-sm inline-flex items-center font-medium text-gray-900 focus:outline-none bg-white
              rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4
              focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
              dark:hover:text-white dark:hover:bg-gray-700"
                    type="button">
              <svg aria-hidden="true" class="w-4 h-4 text-gray-800 dark:text-white me-2"
                   fill="none" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
              </svg>
              Загрузить на ПК
            </button>
          </a>

        </div>
      </div>
      <img alt="" class="absolute bottom-0 z-0" src="/public/bg/Glow_Top.webp">
      <img alt="image description" class="absolute bottom-0 end-60 opacity-80" src="/images/devices-mockup.png"
           style="width: 860px; height: auto">
    </section>
    <section class="m-20">
      <h1 class="text-4xl font-bold text-center mb-16">Ключевые функции</h1>
      <div class="grid grid-cols-3 gap-y-8 justify-items-center mx-auto" style="width: 1284px;">
        <LandingFeature
            icon="/public/icons/online-class.png"
            text="Преподаватели могут публиковать
      лекции, учебные материалы и
      задания для студентов, выполняемые на оценку и имеющие срок выполнения."
            title="Курсы"
        />
        <TwoSpanLandingFeature class="col-span-2"
                               icon="/public/icons/timetable.png"
                               text="Студенты и преподаватели могут наблюдать за изменениями в расписании
                        в реальном времени. Расписание возможно создать вручную или сгенерировать
                        автоматически."
                               title="Расписание"/>
        <LandingFeature icon="/public/icons/teamwork.png"
                        text="Группы позволяют зачислять студентов на курсы более удобным способом.
                          Студенты групп могут просматривать свое расписание."
                        title="Группы"/>
        <LandingFeature icon="/public/icons/teamwork.png"
                        text="Преподаватели отмечают присутствующих студентов, собирается статистика
                        посещаемости каждого учащегося."
                        title="Журнал посещаемости"/>
        <LandingFeature icon="/public/icons/settings.png"
                        text="Управление всеми процессами учебного заведения происходят в удобной панели управления в приложении."
                        title="Администрирование"/>
      </div>
    </section>
  </div>
</template>