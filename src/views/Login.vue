<template>
<div>
 <v-form ref="form" v-model="valid" lazy-validation>
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
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
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