<template>
  <router-view />
</template>

<script>
export default {
  created() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  },

  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
  },

  methods: {
    handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        document.title = 'Oscar FRANK'
      } else {
        document.title = 'Come back 🥺'
      }
    }
  }
}
</script>