<template>
  <panel-view title="login">
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="person"
          name="email"
          label="Email"
          type="text"
          v-model="email"
        ></v-text-field>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
        <v-alert type="error" v-for="error in errors" :key="error">{{
          error
        }}</v-alert>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login">Login</v-btn>
    </v-card-actions>
  </panel-view>
</template>


<script>
import Auth from "@/api/auth";
// import {debounce} from 'lodash';

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      formTitle: "Login Form",
      tempV: "",
    };
  },
  methods: {
    async login() {
      this.errors = [];
      try {
        const response = await Auth.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("logUserIn", { user: response.data.user });
      } catch (err) {
        this.errors.push(err.response.data);
      }
    },
  },
};
</script>