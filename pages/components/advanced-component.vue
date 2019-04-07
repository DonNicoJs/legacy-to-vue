<template>
  <div>
    <h2 class="title">
      Basic Component
    </h2>
    <div class="box">
      <h3 class="SubTitle">
        JQuery Datepicker
      </h3>
      <div class="columns">
        <advanced-datepicker v-model="currentDate" class="column is-6" />
        <b-datepicker v-model="currentDate" :date-formatter="date => date.toLocaleDateString('en-US')" class="column is-6" />
      </div>
    </div>
  </div>
</template>

<script>
import AdvancedDatepicker from '@/components/AdvancedDatepicker'
export default {
  name: 'AdvancedComponent',
  components: {
    AdvancedDatepicker
  },
  data() {
    return {
      currentDate: null
    }
  }
}
</script>

<router>
  name: AdvancedComponent
</router>
