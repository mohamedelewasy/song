<template>
  <panel-view title="Sign Up">
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
      <v-btn color="primary" @click="signup">Sign Up</v-btn>
    </v-card-actions>
  </panel-view>
</template>


<script>
import Auth from "@/api/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      formTitle: "SignUp Form",
    };
  },
  methods: {
    async signup() {
      this.errors = [];
      try {
        const response = await Auth.register({
          email: this.email,
          password: this.password,
        });
        console.log(response);
      } catch (err) {
        this.errors.push(err.response.data);
      }
    },
  },
};
</script>