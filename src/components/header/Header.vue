<template>
  <!-- 5 -->
  <!-- now after creaging those router it will be greate if we can go to that rotes by clicking on it like <a></a> tage se we can do somthing like that <a href="team">Team</a> but the thing is it will redirect us to /team but it will refresh our page which we don't want in our SPA so we will use <router-link></router-link> component provided by vue-router to do this-->
  <!-- <router-link></router-link> use slots internally so we can pass any html we want between it's tags and router link at the end converts it self as <a></a> tag but it will not refresh page and redirect us directlly -->
  <!-- router link also set router-link-active router-link-exzet-active class to that a tag when we are currently on any route so we can design active tab way we want router-link-exzet-active use to catch specific route a tag if we have nested routes because router-link-active will be on all places where parent match where router-link-exzet-active will be on exzet same link a tag-->

  <router-link to="/team">Team</router-link>
  <router-link to="/user">User</router-link>
  <!-- to is use to set link where we want to redirect our user to is not limited to just link we can do many more things with it we will explore it letter -->

  <button @click="goTo('/team')">Team Programitaccly</button>
  <button @click="goTo('/user')">User Programitaccly</button>

</template>

<script>
export default {

    // 6 
    // many times it happens we just not want to redirect on clicking on links we want to redirect user programitaccly by our selfs we can also do it by vue-router
    methods: {
        goTo(path){
        
            // because we register and use vue-router in use() method we can use a special object in all places of our vue app which is $router which provide warous methods and data we want to work with router
            
            this.$router.push(path)
            // we have push method hear which is use to push user to any specific route we also have lots of other methods as well in $router check officeal doc for that
            // push method in it's simplest form just like to directive in router-link use string path where we want to redirect user  

        }
    }

}
</script>

<style>

</style>