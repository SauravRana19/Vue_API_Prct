<template>
  <h1>hloo</h1>
  <input type="text" name="email" v-model="email" /> <br />
  <input type="text" name="password" v-model="password" /> <br />
  <button v-on:click="addUser()">Add User</button>
</template>
<script>

import axios from "axios";
export default {
  name: "postApi",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    addUser() {
      console.warn(this.email, this.password);
      let result = axios.post("https://dev.icc-health.com/dev/login", {
        email: this.email,
        password: this.password,
      });
      console.warn('result', result)
    },
  },
};
</script>
