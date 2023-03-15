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

    <div class="q-pb-xl">
      <div class="q-pa-xl">
        <div class="q-px-xl flex flex-center">
          <div class="row q-mx-xl flex flex-center">
            <q-card class="col-12 col-md-2 q-ma-lg" v-for="project in projects" :key="project" style="width: 320px; height: 230px;">
              <div class="flex flex-center q-ma-sm" style="flex-grow: 1;">
                <q-icon :name="project.picto" color="blue" style="font-size: 35px;"></q-icon>
              </div>
              <div class="flex flex-center q-ma-sm text-center" style="flex-grow: 1;">
                <span class="q-ma-sm" style="font-size: 18px; font-weight: bolder;">{{ project.name }}</span>
                <br>
                <span class="q-ma-sm" style="font-size: 15px;">{{ project.description }}</span>
              </div>
            </q-card>
          </div>
        </div>
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
        {id: 1, picto: 'fa-solid fa-cube', name: 'MY_WORLD', description: 'Is a project realized by a group of 2 persons, where the goal was to recreate a map editor in C with the CSFML library.'},
        {id: 2, picto: 'fa-solid fa-gamepad', name: 'MY_RPG', description: 'Is a game created with a group of friends in Epitech, where the goal is to create an RPG game. We selected our assets and created the game from them.'},
        {id: 3, picto: 'fa-solid fa-robot', name: 'NEED4STEK', description: 'Guiding a car using sensors located on the front of the vehicle. The goal is to go as fast as possible and limit collisions on given maps.'},
        {id: 4, picto: 'fa-solid fa-user', name: 'PORTFOLIO', description: 'Is a personal project (where you are currently), which allows me to present myself and my skills through something more attractive than a simple resume.'},
        {id: 5, picto: 'fa-solid fa-car-side', name: 'MY_VROUM', description: 'Is an application where you can search for a car brand and see its history. You can also enter the license plate of a vehicle and its technical file is returned.'},
        {id: 6, picto: 'fa-solid fa-code', name: 'AHORRA CONSEIL', description: 'Is a website that I was able to create in HTML/CSS for the company Ahorra Conseil, which is an economic promoter.'}
      ],      tab: ref("tab3"),
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
