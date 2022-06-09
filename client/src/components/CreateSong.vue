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
                v-model="title"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="artist"
                label="Artist"
                type="text"
                v-model="artist"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="genre"
                label="Genre"
                type="text"
                v-model="genre"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="album"
                label="Album"
                type="text"
                v-model="album"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="albumImageUrl"
                label="albumImageUrl"
                type="text"
                v-model="albumImageUrl"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="youtubeId"
                label="Youtube Id"
                type="text"
                v-model="youtubeId"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="lyrics"
                label="Lyrics"
                type="text"
                v-model="lyrics"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="tab"
                label="Tab"
                type="text"
                v-model="tab"
              ></v-text-field>
              <v-alert type="error" v-for="error in errors" :key="error">{{
                error
              }}</v-alert>
            </v-form>
            <v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="createSong">Create the song</v-btn>
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
      title : "",
      artist : "",
      genre : "",
      album : "",
      albumImageUrl : "",
      youtubeId : "",
      lyrics : "",
      tab : "",
    };
  },
  methods: {
    async createSong(){
      try{
        SongApi.create({
        title: this.title, 
        artist: this.artist, 
        genre: this.genre, 
        album: this.album, 
        albumImageUrl: this.albumImageUrl, 
        youtubeId: this.youtubeId, 
        lyrics: this.lyrics, 
        tab: this.tab})
        this.$router.push({name: "songs"});
      }catch(err){
        console.log(err)
      }
    },
  },
};
</script>