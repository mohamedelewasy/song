<template>
  <div>
    <v-text-field
      prepend-icon="search"
      name="search"
      label="search by song title, artist, album or genre"
      type="text"
      v-model="search"
    ></v-text-field>
  </div>
</template>


<script>
import _ from 'lodash';

export default {
  data(){
    return {search: ""};
  },
  watch: {
    search: _.debounce(async function(){
      const route = {name: "songs"};
      if (this.search !== ""){
        route.query = {search: this.search}
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (val){
        this.search = val;
      }
    },
  },
};
</script>