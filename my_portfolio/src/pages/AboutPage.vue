<template>
  <q-page style="background-color: #ffffff;">
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
    <q-card flat class="flex flex-center q-ma-lg">
      <span id="my-paragraph" class="text-center" style="font-size: 40px; font-weight: bolder;">About me</span>
    </q-card>

    <div class="flex flex-center">
      <q-avatar size="250px" style="border-radius: 10%;">
        <img src="src/assets/profile.png" />
      </q-avatar>
    </div>

    <div class="q-pb-xl" style="background-color: #f2f2f2;">
      <div class="q-pa-xl">
        <span style="font-size: 25px;">Hard skills</span>
        <div class="row flex flex-center">
          <q-card class="col-12 col-md-2 q-ma-sm q-pt-sm q-mx-lg" flat style="background-color: #f2f2f2;">
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">C</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.9"></q-linear-progress>
            <div class="progress-bar-container"></div>
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">C++</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.75"></q-linear-progress>
            <div class="progress-bar-container"></div>
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">Python</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.77"></q-linear-progress>
            <div class="progress-bar-container"></div><br>
          </q-card>
          <q-card class="col-12 col-md-2 q-ma-sm q-pt-sm q-mx-lg" flat style="background-color: #f2f2f2;">
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">Vuejs</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.85"></q-linear-progress>
            <div class="progress-bar-container"></div>
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">HTML/CSS</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.82"></q-linear-progress>
            <div class="progress-bar-container"></div>
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">SwiftUI</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.8"></q-linear-progress>
            <div class="progress-bar-container"></div><br>
          </q-card>
          <q-card class="col-12 col-md-2 q-ma-sm q-pt-sm q-mx-lg" flat style="background-color: #f2f2f2;">
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">Haskell</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.7"></q-linear-progress>
            <div class="progress-bar-container"></div>
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">Assembly</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.65"></q-linear-progress>
            <div class="progress-bar-container"></div>
            <i class="" style="color: dark; font-size: larger; font-weight: lighter;">Shell</i>
            <q-linear-progress class="progress-bar" color="primary" :value="0.6"></q-linear-progress>
            <div class="progress-bar-container"></div><br>
          </q-card>
        </div>
      </div>
      <div class="col flex flex-center col-12 col-md-12">
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/linux.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">Linux</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/vcode.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">VS Code</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/postman.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">Postman</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/ovh.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">OVH</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/gimp.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">Gimp</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/adobexd.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">Adobe XD</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/figma.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">Figma</p>
        </q-card>
        <q-card class="col-12 col-md-1 q-ma-sm flex flex-center q-pt-sm" style="flex-direction: column; border-radius: 20px;" flat>
          <div class="flex flex-center">
            <q-img src="src/assets/office365.png" style="width: 50px;" class="q-mx-xl"></q-img>
          </div>
          <p style="font-size: 13px;" class="q-mxlg q-mt-lg">Microsoft 365</p>
        </q-card>
      </div>
    </div>

    <div class="q-pb-xl">
      <div class="q-pa-xl">
        <span style="font-size: 25px;">Pathway</span>
        <div class="row flex flex-center">
          <q-card class="col-12 col-md-3 q-ma-sm q-pt-sm flex flex-center" flat>
            <q-timeline color="black" style="position: relative;" class="text-black">
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
          <q-card class="col-12 col-md-3 q-ma-sm q-pt-sm flex flex-center" flat>
            <q-timeline color="black" style="position: relative;" class="text-black">
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

    <div class="q-pb-xl" style="background-color: #f2f2f2;">
      <div class="q-pa-xl">
        <span style="font-size: 25px;">Document</span>
        <div class="row flex flex-center">
          <q-card class="col-12 col-md-6 q-ma-sm q-pt-sm flex flex-center" flat style="background-color: #f2f2f2;">
            <q-card style="background-color: #f2f2f2;">
              <span style="font-size: 20px;">If you are interested in my profile, you can discover it in more detail thanks to my CV present below...<br></span>
              <div class="flex flex-center">
                <q-btn class="q-ma-lg" style="width: 60%; background-color: #ffffff;" href="src/assets/CV Oscar FRANK.pdf" target="_blank">
                  <q-tooltip>
                    That's so kind :)
                  </q-tooltip>
                  See Oscar's CV
                </q-btn>
              </div>
            </q-card>
          </q-card>
        </div>
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
    // onMounted(() => {
    //   const paragraph = document.getElementById("my-paragraph");
    //   const letters = paragraph.textContent.split(/[\s]+/);
    //   let newContent = "";
    //   for (let i = 0; i < letters.length; i++) {
    //     newContent += '<span>' + letters[i] + '</span> ';
    //   }
    //   paragraph.innerHTML = newContent;
    // });
    return {
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

#my-paragraph span:nth-child(8) {
  animation-delay: 0.8s;
}

#my-paragraph span:nth-child(9) {
  animation-delay: 0.9s;
}

#my-paragraph span:nth-child(10) {
  animation-delay: 1.0s;
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