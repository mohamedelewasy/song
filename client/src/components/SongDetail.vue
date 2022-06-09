<template>
  <v-layout>
    <v-flex xs6>
      <panel-view :title="song.title">
        <router-link
          slot="action"
          :to="{ name: 'editsong', params: { id: song.id } }"
        >
          <button class="btn btn-lg">
            <span class="material-icons"> edit </span>
          </button>
        </router-link>
        {{ song }}
      </panel-view>
    </v-flex>
    <v-flex xs6>
      <panel-view title="youtube">
        <iframe
          width="600"
          height="360"
          :src="'https://www.youtube.com/embed/' + song.youtubeId"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </panel-view>
    </v-flex>
  </v-layout>
</template>

<script>
import SongApi from "@/api/song";
// import youtube from "vue-youtube-embed";

export default {
  data() {
    return {
      song: { title: "temp" },
      xxx: "BdMOl7TX88Y",
    };
  },
  async mounted() {
    try {
      this.song = (await SongApi.detail({ id: this.$route.params.id })).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
