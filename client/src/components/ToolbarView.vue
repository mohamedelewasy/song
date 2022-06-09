<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{name:'home'}">Home</router-link>
        <router-link class="navbar-brand" :to="{name:'songs'}">Songs</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="!userLoggedIn">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" :to="{name:'login'}">
                  <span class="material-icons">person</span>Login
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" :to="{name:'signup'}">
                  <span class="material-icons">person</span>Signup
                  </router-link>
              </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" :to="{name:'home'}">
                  <span class="material-icons">person</span>{{userEmail}}
                  </router-link>
              </li>

              <li class="nav-item"> 
                <button class="nav-link active" aria-current="page" @click="logout">
                  <span class="material-icons">logout</span>logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => {
    return {};
  },
  methods: {
    logout(){
      this.$store.dispatch('logUserOut');
      this.$router.push({name: 'home'})
    },
  },
  computed: {
    ...mapGetters({userLoggedIn:'getLogState', userEmail: 'getUserEmail'}),
  }
};
</script>
