<template>
  <div>
      its user List

      <hr>
      <h2>----------- Child view ------------  </h2>
      <router-view></router-view>

      <!--  keep in mind nested route is not a funcnality which we commanly use to just create tabs like stracture where there is parent which stays still and childs view update on every path change to just achive those tabs normal v-if of <component></component> tage of <b-tab></b-tab> from bootstrap will be enough and easy but we create nested routes because on tabs chnage we also want to chnage actual url on browser so user can share it to other in v-if and other solutations the url stays same but just content chnage so keep in mind both diffrence and base on that use any of them feacture-->

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>