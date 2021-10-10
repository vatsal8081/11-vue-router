<template>
  <div>
      <div v-for="team in teams" :key="team.id">
          <p>Id :  {{ team.id }}</p>
          <p>Name: {{ team.name }} </p>

          <!-- 8 -->
          <!-- now how to pass pyanmic params in router link so to in router link can be bind for that -->
          <router-link :to="`/team-member/${team.id}`"> <button> View </button> </router-link> 
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            teams: [
                {id: 1, name: 'team1'}, 
                {id: 2, name: 'team2'}
            ]
        }
    }

}
</script>

<style>

</style>