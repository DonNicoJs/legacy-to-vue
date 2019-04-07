<template>
  <input class="JqUIDatepicker">
</template>

<script>
export default {
  async mounted() {
    const { default: $ } = await import('jquery')
    await Promise.all([
      import('jquery-ui/themes/base/core.css'),
      import('jquery-ui/themes/base/menu.css'),
      import('jquery-ui/themes/base/datepicker.css'),
      import('jquery-ui/themes/base/theme.css'),
      import('jquery-ui/ui/widgets/datepicker')
    ])
    const vueInstance = this
    $(this.$el).datepicker({
      onClose: date => {
        vueInstance.$emit('input', new Date(Date.parse(date)))
      }
    })
  }
}
</script>

<style>
</style>
