<template>
  <v-layout>
    <v-flex xs6>
      <panel-view title="filter">
      <filter-panel />
      </panel-view>
    </v-flex>
    <v-flex xs6>
      <panel-view title="songs">
        <div slot="action">
          <router-link :to="{ name: 'createsongs' }">
            <button class="btn btn-lg">
              <span class="material-icons"> add_circle </span>
            </button>
          </router-link>
        </div>

        <div class="mb-3" v-for="(song, index) in songs" :key="index">
          <v-card elevation="10">
            <v-card-title v-text="song.title" />
            <v-card-subtitle v-text="song.artist" />
            <v-card-text v-text="song.description" />
            <router-link :to="{ name: 'songDetail', params: { id: song.id } }">
              <button class="btn btn-lg">view</button>
            </router-link>
          </v-card>
        </div>
      </panel-view>
    </v-flex>
  </v-layout>
</template>


<script>
import filterPanel from "@/components/SongFilter.vue";
import SongApi from "@/api/song";

export default {
  data() {
    return {
      title: "Songs",
      songs: [],
    };
  },
  async mounted() {
    this.songs = (await SongApi.all()).data;
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (){
        if (this.$route.query.search){
          this.songs = (await SongApi.filter(this.$route.query.search)).data;
        }else{
          this.songs = (await SongApi.all()).data;
        }
      }
    },
  },
  components: {
    filterPanel,
  },
};
</script>