<template>
  <q-page style="background-image: url('/bkgHome.jpg');">
    <q-toolbar class="bg-dark text-white shadow-2 fixed-top" style="height: 80px; z-index: 999;">
      <h6 class="q-mx-lg">Home</h6>
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
    <div class="flex flex-center">
    </div>
    <div class="q-pt-xl">
      <div class="flex flex-center q-pa-lg"  style="background-color: transparent;">
        <q-card class="animated-text q-pa-sm q-pt-sm" flat style="font-size: xx-large; background-color: transparent; color: white;">O</q-card>
        <q-card class="animated-text q-pa-sm q-pt-sm" flat style="font-size: xx-large; background-color: transparent; color: white;">S</q-card>
        <q-card class="animated-text q-pa-sm q-pt-sm" flat style="font-size: xx-large; background-color: transparent; color: white;">C</q-card>
        <q-card class="animated-text q-pa-sm q-pt-sm" flat style="font-size: xx-large; background-color: transparent; color: white;">A</q-card>
        <q-card class="animated-text q-pa-sm q-pt-sm" flat style="font-size: xx-large; background-color: transparent; color: white;">R</q-card>
      </div>
      <div class="flex flex-center q-pa-sm"  style="background-color: transparent;">
        <span class="text-center" style="font-size: x-large; color: white;">
          Welcome to my portfolio, have a good time!
        </span>
      </div>
    </div>

    <div class="q-ma-lg q-pa-lg flex flex-center"  style="background-color: transparent;">
      <q-btn flat href="https://www.linkedin.com/in/oscar-frank/" target="_blank">
        <q-icon style="color: white;" name="fa fa-linkedin"></q-icon>
      </q-btn>
      <q-btn flat href="https://github.com/OoscarFrank" target="_blank">
        <q-icon style="color: white;" name="fa fa-github"></q-icon>
      </q-btn>
      <q-btn flat href="mailto:oscar.frank@epitech.eu" target="_blank">
        <q-icon style="color: white;" name="fa fa-envelope-circle-check" />
      </q-btn>
    </div>
    <div class="flex flex-center fixed-bottom">
      <q-avatar class="avatar animated-memoji" size="250px" style="border-radius: 0%;" @click="popupOpen()">
        <img src="/memoWname.png" />
      </q-avatar>
    </div>

    <q-dialog v-model="popup">
      <q-card class="bg-grey-8 text-white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Hi I'm Oscar!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          I am very happy to see you on my portfolio. I'm a student at Epitech, a french computer science school. I'm currently in my 3rd year of studies, enjoy your visit and if you are interested in me, you will find many ways to contact me.
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  name: "IndexPage",
  created() {
    const faScript = document.createElement("script");
    faScript.setAttribute("src", "https://kit.fontawesome.com/f8ca107b00.js");
    faScript.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(faScript);
  },
  setup() {
    const router = useRouter();
    const popup = ref(false);
    return {
      tab: ref("tab1"),
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
      popupOpen: () => {
        popup.value = true;
        console.log(popup);
      },
      popup,
    };
  },
});
</script>

<style>

.avatar:hover{
  cursor: pointer;
}

.animated-text {
  animation: bounce 3s infinite;
}

.animated-memoji {
  animation: bounce2 8s;
}

@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -15px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounce2 {
  0% {
    transform: translate3d(0, 300px, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

</style>