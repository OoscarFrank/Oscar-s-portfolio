<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <div>
      <q-toolbar class="bg-dark text-white shadow-2 fixed-top" style="height: 80px; z-index: 999;">
        <h6 class="q-mx-lg">Error</h6>
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-tab @click="GoHomeVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab1" label="HOME" />
          <q-tab @click="GoHomeVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab2" label="ABOUT" />
          <q-tab @click="GoHomeVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab3" label="PROJECTS" />
          <q-tab @click="GoHomeVue();" class="q-px-lg" style="height: 80px;" v-if="$q.screen.width > 600" name="tab4" label="CONTACT" />
        </q-tabs>
        <q-btn-dropdown v-if="$q.screen.width < 600" icon="menu" style="height: 80px;" flat ref="dropdown">
          <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">HOME</q-item-label>
          <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">ABOUT</q-item-label>
          <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">PROJECTS</q-item-label>
          <q-item-label class="q-ma-lg" @click="GoHomeVue(); $refs.dropdown.hide()">CONTACT</q-item-label>
        </q-btn-dropdown>
      </q-toolbar>
      <q-avatar
          size="350px"
          style="border-radius: 10%;"
        >
          <img src="/nop.png" />
        </q-avatar>
        <q-card flat class="bg-white">
          <h4 class="text-dark">There's nothing here</h4>
        </q-card>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="dark"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'ErrorNotFound',
  setup() {
    const router = useRouter();

    return {
      tab: ref(),
      dropdownItems: [
        { label: "HOME" },
        { label: "ABOUT" },
        { label: "PROJECTS" },
        { label: "CONTACT" },
      ],
      GoHomeVue: () => {
        router.push("/");
      },
    };
  },
})
</script>
