<template>
  <div>
    <div ref="angularDock" key="basicAngularDoc" />
  </div>
</template>

<script>
export default {
  name: 'AngularSPA',

  components: {},
  async mounted() {
    const { default: angularFactory } = await import('@/angular/app.js')
    angularFactory(this.$refs.angularDock)
  }
}
</script>

<router>
  name: AngularSPA
</router>
