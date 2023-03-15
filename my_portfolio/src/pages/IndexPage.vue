<template>
  <q-page style="background-color: #ffffff;">
    <q-toolbar class="bg-dark text-white shadow-2 fixed-top" style="height: 80px; z-index: 999;">
      <h6 class="q-mx-lg">Home</h6>
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
      <span id="my-paragraph" class="text-center" style="font-size: 40px; font-weight: bolder;">Welcome</span>
    </q-card>
    <div class="row">
      <div class="q-pa-xl col-12 col-md-7">
        <q-card class="flex flex-center text-center" flat style="height: 100%; width: 100%; font-size: 20px;">
          <span style="font-size: 25px;">Hi, I'm Oscar<br>Welcome to my portfolio</span>
        </q-card>
      </div>
      <div class="q-pa-lg col-12 col-md-5 flex flex-center">
        <q-avatar
          size="350px"
          style="border-radius: 10%; box-shadow: 0px 3px 3px 3px black"
        >
          <img src="src/assets/memoji.png" />
        </q-avatar>
      </div>
    </div>
    <q-card class="flex flex-center text-center bg-dark" flat style="height: 100%; width: 100%; font-size: 20px; border-radius: 0%;">
      <span id="my-paragraph">Hi, I'm Oscar<br>Welcome to my portfolio</span>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const router = useRouter();

    // onMounted(() => {
    //   const paragraph = document.getElementById("my-paragraph");
    //   const letters = paragraph.textContent.split("");
    //   let newContent = "";
    //   for (let i = 0; i < letters.length; i++) {
    //     newContent += '<span>' + letters[i] + '</span>';
    //   }
    //   paragraph.innerHTML = newContent;
    // });

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
    };
  },
});
</script>



<style>
@keyframes fall {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

#my-paragraph {
  display: inline-block;
}

#my-paragraph span {
  display: inline-block;
  animation-name: fall;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  opacity: 0;
}

#my-paragraph span:nth-child(1) {
  animation-delay: 0.1s;
}

#my-paragraph span:nth-child(2) {
  animation-delay: 0.2s;
}

#my-paragraph span:nth-child(3) {
  animation-delay: 0.3s;
}

#my-paragraph span:nth-child(4) {
  animation-delay: 0.4s;
}

#my-paragraph span:nth-child(5) {
  animation-delay: 0.5s;
}

#my-paragraph span:nth-child(6) {
  animation-delay: 0.6s;
}

#my-paragraph span:nth-child(7) {
  animation-delay: 0.7s;
}

</style>