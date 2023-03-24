<template>
  <q-page style="background-color: #2d2d2d;">
    <q-toolbar class="bg-dark text-white shadow-2 fixed-top" style="height: 80px; z-index: 999;">
      <h6 class="q-mx-lg">About</h6>
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
      <span id="my-paragraph" class="text-center" style="font-size: 40px; font-weight: lighter; color: white;">About me</span>
    </q-card>

    <div class="flex flex-center">
      <q-avatar size="250px" style="border-radius: 10%;">
        <img src="/projectMemo.png" />
      </q-avatar>
    </div>

    <div style="background-color: #3d3d3d;">
      <div class="flex flex-center">
        <span class="q-mt-lg" style="font-size: x-large; font-weight: lighter; color: white;">Hard skills</span>
      </div>
      <div class="row flex flex-center">
        <div class="col-12 col-md-5 flex flex-center q-ma-lg">
          <q-card v-for="lang in langages" :key="lang" class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px; background-color: #4d4d4d;" flat>
            <div class="flex flex-center">
              <q-img :src="lang.img" style="width: 50px;" class="q-mx-xl"></q-img>
            </div>
            <p style="font-size: 13px; color: white;" class="q-mxlg q-mt-lg">{{ lang.name }}</p>
          </q-card>
        </div>
        <div class="col-12 col-md-5 flex flex-center q-ma-lg">
          <q-card v-for="soft in softwares" :key="soft" class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px; background-color: #4d4d4d;" flat>
            <div class="flex flex-center">
              <q-img :src="soft.img" style="width: 50px;" class="q-mx-xl"></q-img>
            </div>
            <p style="font-size: 13px; color: white;" class="q-mxlg q-mt-lg">{{ soft.name }}</p>
          </q-card>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-center">
        <span class="q-mt-lg" style="font-size: x-large; font-weight: lighter; color: white;">Pathway</span>
      </div>
      <div class="row flex flex-center">
        <div class="col-12 col-md-5 flex flex-center q-ma-lg">
          <q-card class="col-12 col-md-3 q-ma-sm q-pt-sm flex flex-center" flat style="background-color: #2d2d2d;">
            <q-timeline color="white" style="position: relative;" class="text-white">
              <i style="font-size: 20px">Education</i>
              <q-timeline-entry>
                <template v-slot:subtitle>2014 - 2018</template>
                <template v-slot:title>College Jeanne d'Arc</template>
                <div style="color: dark; font-size: larger; font-weight: lighter;">- Obtaining the patent</div>
              </q-timeline-entry>
              <q-timeline-entry>
                <i style="font-size: 17px; text-h6"> </i>
                <template v-slot:subtitle>2018 - 2021</template>
                <template v-slot:title>Lycée Saint Joseph De Cluny</template>
                <div style="color: dark; font-size: larger; font-weight: lighter;">- 1st year in Management and Administration<br/>- 2nd and last year in STMG field<br/>- Obtaining STMG Baccalaureate</div>
              </q-timeline-entry>
              <q-timeline-entry>
                <template v-slot:subtitle>2021 - 2022</template>
                <template v-slot:title>Epitech</template>
                <div style="color: dark; font-size: larger; font-weight: lighter;">- First year<br/>- Second year in progress with 3.19 as GPA</div>
              </q-timeline-entry>
            </q-timeline>
          </q-card>
        </div>
        <div class="col-12 col-md-5 flex flex-center q-ma-lg q-pa-lg">
          <q-card class="col-12 col-md-3 q-ma-sm q-pt-sm flex flex-center" flat style="background-color: #2d2d2d;">
            <q-timeline color="white" style="position: relative;" class="text-white">
            <i style="font-size: 20px">Experience</i>
            <q-timeline-entry>
              <i style="font-size: 17px; text-h6"> </i>
              <template v-slot:subtitle>June 2019</template>
              <template v-slot:title>ACE - Accounting firm</template>
              <div style="color: dark; font-size: larger; font-weight: lighter;">- Development of financial models with the sales and accounting teams,<br/>- Calculation of monthly salaries, taking into account overtime, vacations...</div>
            </q-timeline-entry>
            <q-timeline-entry>
              <template v-slot:subtitle>August - December 2022</template>
              <template v-slot:title>Apliko - digital creations</template>
              <div style="color: dark; font-size: larger; font-weight: lighter;">- Development of an application in Vuejs using different features such as API calls, local storage, redirections...<br>- Creation of a mockup for a shop online<br></div>
            </q-timeline-entry>
            </q-timeline>
          </q-card>
        </div>
      </div>
    </div>

    <div style="background-color: #3d3d3d;">
      <div class="flex flex-center">
        <span class="q-mt-lg" style="font-size: x-large; font-weight: lighter; color: white;">Document</span>
      </div>
      <div class="row flex flex-center">
        <div class="col-12 col-md-12 flex flex-center q-ma-lg">
          <q-card class="col-12 col-md-6 q-ma-sm q-pt-sm flex flex-center" flat style="background-color: #3d3d3d;">
            <q-card style="background-color: #3d3d3d; text-align: center;">
              <span style="font-size: 20px; color: white;">If you are interested in my profile, you can discover it in more detail thanks to my CV present below...<br></span>
              <div class="flex flex-center">
                <q-card class="flex flex-center q-ma-lg">
                  <q-img src="/littleCV.png" class="q-ma-lg" style="max-width: 100%"></q-img>
                  <q-btn flat style="background-color: #3d3d3d; width: 100%;" href="./CV Oscar FRANK.pdf" target="_blank">
                    <span style="color: white;">See Oscar's resume</span>
                  </q-btn>
                </q-card>
              </div>
            </q-card>
          </q-card>
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
  name: "AboutPage",
  setup() {
    const router = useRouter();
    return {
      langages: [
        {img: "/langages/C.png", name: "C"},
        {img: "/langages/cpp.png", name: "C++"},
        {img: "/langages/python.png", name: "Python"},
        {img: "/langages/vuejs.png", name: "Vuejs"},
        {img: "/langages/html.png", name: "HTML"},
        {img: "/langages/css.png", name: "CSS"},
        {img: "/langages/swiftui.png", name: "SwiftUI"},
        {img: "/langages/haskell.png", name: "Haskell"},
      ],
      softwares: [
        {img: "/softwares/linux.png", name: "Linux"},
        {img: "/softwares/vcode.png", name: "Visual Studio"},
        {img: "/softwares/github.png", name: "Github"},
        {img: "/softwares/postman.png", name: "Postman"},
        {img: "/softwares/gimp.png", name: "Gimp"},
        {img: "/softwares/adobexd.png", name: "Adobe XD"},
        {img: "/softwares/figma.png", name: "Figma"},
        {img: "/softwares/office365.png", name: "Microsft 365"},
      ],
      tab: ref("tab2"),
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

.progress-bar-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
}

.progress-bar {
  height: 8px;
}

</style>