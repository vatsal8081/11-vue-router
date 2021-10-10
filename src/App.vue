<template>

  <Header />

  <!-- 4 -->
  <!-- now all things is set we install and configur router we define routes and also create components we want to show on that router but one important thing is missing which is when we visit routes in which part of application vue should show that components because it's not nessacery that every time we just want to render routes on App.vue only we can render those components in any place or component in our app and also in future we will have we have to render routes in sub components insted of in whole screen so to let vue know teah it should render the router component we have to use <router-view></router-view> component built in to vue-router -->
  <!-- hear i want to render those components in App.vue so i am defining <router-view></router-view> hear-->
  <router-view/>

</template>

<script>

import Header from './components/header/Header.vue';

export default {
   components: {Header}
};
</script>

