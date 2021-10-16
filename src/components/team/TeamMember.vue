<template>
  <p> dynamic id is {{ teamId }} </p>
</template>

<script>
export default {

    created(){
        // 9
        // now we define dynamic route but how we will get those dynamic value hear in component to use
        // so by other object provided by vue-router $route this will contain all properties related to current route we have param object there which contain key value pair of data here key in name of dynamic route we define in our routing and value is value we use in browser url for that key
        // route also has number of other options just console $route and see officeal doc for that
        // created is best place to get those dynamic routes because at this time component is created and all other data and other things avalable to use for us 
        this.teamId = this.$route.params.id
        
    },

    watch: {
        // 9
        // many times it happens that we want to visit same route again where we are currently ex: we are in /team-member/1 and want to visit 
        // /team-member/2 so visit same route with just diffrent dynamic propertiey then vue won't rerender page to incress pufformance because it's not a good thing to rerender every time we revisit same link to on url new value will be set on $route new value will be set but we assign teamId from route in  created so it was happen 1 time now it won't change so we will not get change in screen so for those cases we can use watch and watch on $route to get change update and base on that write code that change our screen     
        $route(){
            // logic when we revisit same route with new dynamic properties
        }
    },


    data(){
        return {
            teamId : "",
            // this will also work
            // teamId : this.$route.params.id
        }
    }

}
</script>

<style>

</style>