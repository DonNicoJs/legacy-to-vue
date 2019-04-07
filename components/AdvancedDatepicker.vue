<template>
  <div>
    <input
      v-show="datepicker"
      ref="datepicker"
      :value="internalValue"
      type="text"
    >
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    return {
      datepicker: null
    }
  },
  computed: {
    internalValue() {
      if (this.value) {
        return format(this.value, 'MM/DD/YYYY')
      }
      return null
    }
  },
  watch: {
    value: {
      immediate: false,
      handler(value) {
        if (this.datepicker) {
          this.datepicker.datepicker('setDate', this.internalValue)
        }
      }
    }
  },
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
    this.datepicker = $(this.$refs.datepicker)
      .datepicker({
        onClose: date => {
          const parsed = date ? new Date(Date.parse(date)) : null
          vueInstance.$emit('input', parsed)
        }
      })
      .datepicker('widget')
  }
}
</script>

<style>
</style>
