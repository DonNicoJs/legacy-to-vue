<template>
  <div>
    <div ref="angularDock" key="angularDock" />
  </div>
</template>

<script>
export default {
  name: 'AngularAdvancedSPA',

  components: {},
  async mounted() {
    const {
      default: angularFactory
    } = await import('@/angular-advanced/app.js')
    angularFactory(this.$refs.angularDock)
  }
}
</script>

<router>
  name: AngularAdvancedSPA
</router>
