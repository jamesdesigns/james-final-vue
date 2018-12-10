<template>
<div class="login">


 <v-form ref="form" v-model="valid" lazy-validation>
     <h1 class="animated bounceIn">Login Form</h1>
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
    <!-- NEW -->
    <v-select
      v-model="number"
      :items="amount"
      :rules="[v => !!v || 'Amount is required']"
      label="Players Needed"
      required
    ></v-select>
    <v-btn
      color="pink lighten-2"  
      :disabled="!valid"
      @click="onSubmit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>

  <div class="verifyInfo">
      <ul>
          <li>Username: {{ username }}</li>
          <li>Email: {{ email }}</li>
          <li>Password: {{ password }}</li>
          <li>Game Experience: {{ select }}</li>
          <li>Players Needed: {{ number }}</li>
          </ul>
  </div>

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
      select: '',  
      select: null,
      items: [
        'Newbie',
        'Average',
        'Good',
        'Pro',
        'Absolute Dominator'
      ],
      number: '',  
      number: null,
      amount: [
        '0 - 1',
        '2 - 5',
        '5 - 10',
        '11 +'
      ],
     
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            username: this.username,
            email: this.email,
            password: this.password,
            select: this.select,
            number: this.number,
            checkbox: this.checkbox

          })
        }
      },
      clear () {
        this.$refs.form.reset()
      },

      // NEW STATE MANAGEMENT
      onSubmit() {
          const formData = {
              username: this.username,
              email: this.email,
              password: this.password,
              select: this.select,
              number: this.number
          }
          console.log(formData)
          this.$store.dispatch('userLoggedIn', {
              username: formData.username,
              email: formData.email,
              password: formData.password,
              select: formData.select,
              number: formData.number
          })
      }
    }
  }
</script>
<style>
.verifyInfo {
    color:#f344a5;
    margin-top:5%;
    margin-left: -20px;
    margin-bottom: 150px;
}
.login {
    margin-top: 8%;
}
</style>