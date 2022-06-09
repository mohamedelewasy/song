<template>
  <v-app id="inspire">
    <v-main>
      <panel-view title="songs">
        <div>
          <v-card elevation="10">
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="title"
                label="Title"
                type="text"
                value=""
                v-model="song.title"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="artist"
                label="Artist"
                type="text"
                v-model="song.artist"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="genre"
                label="Genre"
                type="text"
                v-model="song.genre"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="album"
                label="Album"
                type="text"
                v-model="song.album"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="albumImageUrl"
                label="albumImageUrl"
                type="text"
                v-model="song.albumImageUrl"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="youtubeId"
                label="Youtube Id"
                type="text"
                v-model="song.youtubeId"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="lyrics"
                label="Lyrics"
                type="text"
                v-model="song.lyrics"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="tab"
                label="Tab"
                type="text"
                v-model="song.tab"
              ></v-text-field>
              <v-alert type="error" v-for="error in errors" :key="error">{{
                error
              }}</v-alert>
            </v-form>
            <v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="updateSong">Update the song</v-btn>
              </v-card-actions>
            </v-card-actions>
          </v-card>
        </div>
      </panel-view>
    </v-main>
  </v-app>
</template>


<script>
import SongApi from "@/api/song";

export default {
  data() {
    return {
      errors: [],
      song: {
        id: this.$route.params.id,
        title: null, 
        artist: null, 
        genre: null, 
        album: null, 
        albumImageUrl: null, 
        youtubeId: null, 
        lyrics: null, 
        tab: null
        },
    };
  },
  async mounted() {
    try{
      this.song = (await SongApi.detail({id:this.$route.params.id})).data;
    }catch(err){
      console.log(err);
    }
    
  },
  methods: {
    async updateSong(){
      try{
        SongApi.update(this.song)
        this.$router.push({name: "songs"});
      }catch(err){
        console.log(err)
      }
    },
  },
};
</script>