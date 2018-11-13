<template>
<div>
<v-form v-model="valid">
    <v-flex xs12 sm6 offset-sm3>
    <v-text-field
      v-model="username"
      :rules="nameRules"
      :counter="10"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
    </v-flex>
  </v-form>
  </div>
</template>
<script>
</script>
<style>
h1 {
    margin-top:10%;
}

form {
    margin-top:15%;
}
</style>