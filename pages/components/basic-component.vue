<template>
  <div>
    <h2 class="title">
      Basic Component
    </h2>
    <div class="box">
      <h3 class="SubTitle">
        JQuery Datepicker
      </h3>
      <div>
        <basic-datepicker />
      </div>
    </div>
  </div>
</template>

<script>
import BasicDatepicker from '@/components/BasicDatepicker'
export default {
  name: 'BasicCcomponent',

  components: {
    BasicDatepicker
  }
}
</script>

<router>
  name: BasicCcomponent
</router>
