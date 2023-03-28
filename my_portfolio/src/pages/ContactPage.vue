<template>
    <q-page style="background-color: #2d2d2d;">
      <q-toolbar class="bg-dark text-white shadow-2 fixed-top" style="height: 80px; z-index: 999;">
        <h6 class="q-mx-lg">Project</h6>
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-tab @click="GoHomeVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab1" label="HOME" />
          <q-tab @click="GoAboutVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab2" label="ABOUT" />
          <q-tab @click="GoProjectVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab3" label="PROJECTS" />
          <q-tab @click="GoContactVue()" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab4" label="CONTACT" />
        </q-tabs>
        <q-btn-dropdown v-if="$q.screen.width < 600" icon="menu" style="height: 80px;" flat ref="dropdown">
          <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">HOME</q-item-label>
          <q-item-label class="q-ma-lg" @click="GoAboutVue(); $refs.dropdown.hide()">ABOUT</q-item-label>
          <q-item-label class="q-ma-lg" @click="GoProjectVue(); $refs.dropdown.hide()">PROJECTS</q-item-label>
          <q-item-label class="q-ma-lg" @click="GoContactVue(); $refs.dropdown.hide()">CONTACT</q-item-label>
        </q-btn-dropdown>
      </q-toolbar>
      <br>
      <br>
      <br>
      <q-card flat class="flex flex-center q-ma-lg" style="background-color: transparent;">
        <span id="my-paragraph" class="text-center" style="font-size: 40px; font-weight: lighter; color: white;">Contact</span>
      </q-card>

      <div class="flex flex-center">
        <q-avatar size="250px" style="border-radius: 10%;">
          <img src="/memoContact.png" />
        </q-avatar>
      </div>

      <div class="q-pa-lg flex flex-center" style="background-color: #3d3d3d;">
        <span class="text-center" style="font-size: larger; color: white;">If my profile interests you, I am available to discuss a project or an internship.</span>
      </div>
      <div class="q-pa-sm flex flex-center" style="background-color: #3d3d3d;">
        <div class="col flex flex-center q-ma-sm">
          <q-btn flat href="https://www.linkedin.com/in/oscar-frank/" target="_blank">
            <div class="col flex flex-center q-ma-sm">
              <div class="col-12 col-md-3 q-mx-xl">
                <q-icon class="q-mx-xl" color="white" style="font-size: 20px;" name="fa fa-linkedin"></q-icon>
                <br>
                <span class="flex flex-center q-ma-lg text-white">LinkedIn</span>
              </div>
            </div>
          </q-btn>
          <q-btn flat href="https://github.com/OoscarFrank" target="_blank">
            <div class="col flex flex-center q-ma-sm">
              <div class="col-12 col-md-3 q-mx-xl">
                <q-icon class="q-mx-xl" color="white" style="font-size: 20px;" name="fa fa-github"></q-icon>
                <br>
                <span class="flex flex-center q-ma-lg text-white">Github</span>
              </div>
            </div>
          </q-btn>
          <q-btn flat href="mailto:oscar.frank@epitech.eu" target="_blank">
            <div class="col flex flex-center q-ma-sm">
              <div class="col-12 col-md-3 q-mx-xl">
                <q-icon class="q-mx-xl" color="white" style="font-size: 20px;" name="fa fa-envelope-circle-check"></q-icon>
                <br>
                <span class="flex flex-center q-ma-lg text-white">E-MAIL</span>
              </div>
            </div>
          </q-btn>
        </div>
      </div>
      <div class="bg-dark flex flex-center" style="position: absolute; bottom: 0px; width: 100%;">
        <div class="flex flex-center q-ma-sm">
          <q-btn class="text-white" flat @click="GoHomeVue();">Home</q-btn>
        <q-btn class="text-white" flat @click="GoAboutVue();">About</q-btn>
        <q-btn class="text-white" flat @click="GoProjectVue();">Projects</q-btn>
        <q-btn class="text-white" flat @click="GoContactVue()">Contact</q-btn>
        </div>
      </div>
    </q-page>
  </template>

  <script>
  import { defineComponent, onMounted } from "vue";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "ContactPage",
    setup() {
      const router = useRouter();
      return {
        tab: ref("tab4"),
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
        GoContactVue: () => {
          router.push("/ContactPage");
        },
      };
    },
  });
  </script>
  