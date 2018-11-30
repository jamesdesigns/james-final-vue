<template>
<div>
 <v-form ref="form" v-model="valid" lazy-validation>
    <v-flex xs12 sm6 offset-sm3>
    <v-text-field
      v-model="username"
      :rules="nameRules"
      :counter="20"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
        ></v-text-field>


     <!--
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"

         -->   
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      :type="show1 ? 'text' : 'password'"
      label="Password"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Game Experience Level"
      required
    ></v-select>
    <v-btn
      color="pink lighten-2"  
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
 import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      username: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      show1: false,
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',  
      ],
      select: null,
      items: [
        'Newbie',
        'Rookie',
        'Gets the Job Done',
        'Proficient',
        'Absolute Dominator',
        'Other'
      ],
     
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            password: this.password,
            select: this.select,
            checkbox: this.checkbox

          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
<style scoped>
h1 {
    margin-top:10%;
}

form {
    margin-top:15%;
}
</style>