<template>
  <q-page style="background-color: #2d2d2d;">
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
    <q-card flat class="flex flex-center q-ma-lg" style="background-color: transparent;">
      <span id="my-paragraph" class="text-center" style="font-size: 40px; font-weight: lighter; color: white;">Projects</span>
    </q-card>

    <div class="flex flex-center">
      <q-avatar size="250px" style="border-radius: 10%;">
        <img src="/profile.png" />
      </q-avatar>
    </div>

    <div class="q-pb-xl flex flex-center" style="background-color: #3d3d3d;">
      <div class="q-pt-lg q-pa-sm flex flex-center" style="width: 100%;">
        <span style="font-size: larger; color: white;">You will find attached some of the projects I was able to realize during my schooling at EPITECH, but also some personal projects.</span>
      </div>
      <div class="flex flex-center q-mt-lg">
        <q-btn href="https://github.com/OoscarFrank" target="_blank">
          <q-icon class="q-mr-sm" style="color: white;">
            <i class="fab fa-github"></i>
          </q-icon>
          <span style="color: white;">See Oscar's Github</span>
        </q-btn>
      </div>
    </div>

    <div class="q-pb-xl">
      <div class="q-pa-xl">
        <div class="q-px-xl flex flex-center">
          <div class="row q-mx-xl flex flex-center">
            <q-card class="col-12 col-md-2 q-ma-lg" v-for="project in projects" :key="project" style="width: 320px; height: 250px; border-radius: 5%; background-color: #4d4d4d;">
              <div class="flex flex-center q-ma-sm" style="flex-grow: 1;">
                <q-icon class="q-ma-sm" :name="project.picto" color="cyan" style="font-size: 35px;"></q-icon>
              </div>
              <div class="flex flex-center q-ma-sm text-center" style="flex-grow: 1;">
                <span class="q-ma-sm" style="font-size: 18px; font-weight: lighter; color: white;">{{ project.name }}<br>{{ project.lang }}</span>
                <br>
                <span class="q-ma-sm" style="font-size: 15px; color: white;">{{ project.description }}</span>
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
        <q-btn class="q-ma-sm text-white" flat @click="GoProjectVue();">Projects</q-btn>
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
