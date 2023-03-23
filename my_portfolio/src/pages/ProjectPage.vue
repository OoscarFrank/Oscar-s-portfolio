<template>
  <q-page style="background-color: #ffffff;">
    <q-toolbar class="bg-dark text-white shadow-2 fixed-top" style="height: 80px; z-index: 999;">
      <h6 class="q-mx-lg">Project</h6>
      <q-space />
      <q-tabs v-model="tab" shrink>
        <q-tab @click="GoHomeVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab1" label="HOME" />
        <q-tab @click="GoAboutVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab2" label="ABOUT" />
        <q-tab @click="GoProjectVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab3" label="PROJECTS" />
        <q-tab class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab4" label="CONTACT" />
      </q-tabs>
      <q-btn-dropdown v-if="$q.screen.width < 600" icon="menu" style="height: 80px;" flat ref="dropdown">
        <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">HOME</q-item-label>
        <q-item-label class="q-ma-lg" @click="GoAboutVue(); $refs.dropdown.hide()">ABOUT</q-item-label>
        <q-item-label class="q-ma-lg" @click="GoProjectVue(); $refs.dropdown.hide()">PROJECTS</q-item-label>
        <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">CONTACT</q-item-label>
      </q-btn-dropdown>
    </q-toolbar>
    <br>
    <br>
    <br>
    <q-card flat class="flex flex-center q-ma-lg">
      <span id="my-paragraph" class="text-center" style="font-size: 40px; font-weight: bolder;">Projects</span>
    </q-card>

    <div class="q-pb-xl flex flex-center">
      <div class="q-pa-xl flex flex-center">
        <span style="font-size: 15px;">You will find attached some of the projects I was able to realize during my schooling at EPITECH, but also some personal projects. If you are interested in doing a project, please contact me.</span>
      </div>
    </div>

    <div class="q-pb-xl" style="background-color: #f2f2f2;">
      <div class="q-pa-xl">
        <div class="q-px-xl flex flex-center">
          <div class="row q-mx-xl flex flex-center">
            <q-card class="col-12 col-md-2 q-ma-lg" v-for="project in projects" :key="project" style="width: 320px; height: 250px; border-radius: 5%;">
              <div class="flex flex-center q-ma-sm" style="flex-grow: 1;">
                <q-icon class="q-ma-sm" :name="project.picto" color="blue" style="font-size: 35px;"></q-icon>
              </div>
              <div class="flex flex-center q-ma-sm text-center" style="flex-grow: 1;">
                <span class="q-ma-sm" style="font-size: 18px; font-weight: bolder;">{{ project.name }}<br>{{ project.lang }}</span>
                <br>
                <span class="q-ma-sm" style="font-size: 15px;">{{ project.description }}</span>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark flex flex-center">
      <div class="flex flex-center q-ma-sm">
        <q-btn class="q-ma-sm text-white" flat @click="GoHomeVue();">Home</q-btn>
        <span class="q-ma-sm text-white">|</span>
        <q-btn class="q-ma-sm text-white" flat @click="GoAboutVue();">About</q-btn>
        <span class="q-ma-sm text-white">|</span>
        <q-btn class="q-ma-sm text-white" flat @click="GoProjectVue();">Porjects</q-btn>
        <span class="q-ma-sm text-white">|</span>
        <q-btn class="q-ma-sm text-white" flat>Contact</q-btn>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import '@fortawesome/fontawesome-free/css/all.css'

export default defineComponent({
  name: "ProjectPage",
  setup() {
    const router = useRouter();

    return {
      projects: [
        {lang: 'C', picto: 'fa-solid fa-terminal', name: 'MINISHELL', description: 'Is a project where the goal was to reproduce a terminal shell, with the ability to perform many commands and program executions.'},
        {lang: 'C', picto: 'fa-solid fa-cube', name: 'MY_WORLD', description: 'Is a project realized by a group of 2 persons, where the goal was to recreate a map editor in C with the CSFML library.'},
        {lang: 'C', picto: 'fa-solid fa-gamepad', name: 'MY_RPG', description: 'Is a game created with a group of friends in Epitech, where the goal is to create an RPG game. We selected our assets and created the game from them.'},
        {lang: 'C', picto: 'fa-solid fa-robot', name: 'NEED4STEK', description: 'Guiding a car using sensors located on the front of the vehicle. The goal is to go as fast as possible and limit collisions on given maps.'},
        {lang: 'Vue.js', picto: 'fa-solid fa-user', name: 'PORTFOLIO', description: 'Is a personal project (where you are currently), which allows me to present myself and my skills through something more attractive than a simple resume.'},
        {lang: 'SwiftUI', picto: 'fa-solid fa-car-side', name: 'MY_VROUM', description: 'Is an application where you can search for a car brand and see its history. You can also enter the license plate of a vehicle and its technical file is returned.'},
        {lang: 'C', picto: 'fa-solid fa-server', name: 'MY_FTP', description: 'Is a project where the goal was to develop an FTP server, as well as all the functions that are useful within it.'},
        {lang: 'HTML/CSS', picto: 'fa-solid fa-code', name: 'AHORRA CONSEIL', description: 'Is a website that I was able to create in HTML/CSS for the company Ahorra Conseil, which is an economic promoter.'}
      ],      
      tab: ref("tab3"),
      dropdownItems: [
        { label: "HOME" },
        { label: "ABOUT" },
        { label: "PROJECTS" },
        { label: "CONTACT" },
      ],
      GoHomeVue: () => {
        router.push("/");
      },
      GoAboutVue: () => {
        router.push("/AboutPage");
      },
      GoProjectVue: () => {
        router.push("/ProjectPage");
      },
    };
  },
});
</script>
