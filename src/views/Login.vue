<template>
<v-container>
    <v-layout justify-center>
        <v-flex xs6>
            <v-card>
                <v-form>
                    <v-text-field
                    label="Email"
                    v-model="email"
                    placeholder="foo@bar.com">
                    </v-text-field>
                    <v-text-field
                    label="Password"
                    v-model="password"
                    :type="show1 ? 'text' : 'password'">
                    </v-text-field>
                </v-form>
            </v-card>    
        <v-flex> 
            <div>
                <p>{{ email }}</p>
                <p>{{ password }}</p>
            </div>       
    </v-layout>    
</v-container>    
</template>
<script>
</script>
<style>
</style>