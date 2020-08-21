<template>
  <v-form @submit.prevent="submit">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" color="deep-purple accent-4">
        <h1 align="center">Quieres Saber el Tuyo?</h1>
        <br />
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              label="Nombre y Apellido"
              placeholder="Rafael Moreno"
              required
            ></v-text-field>

            <v-autocomplete
              ref="country"
              v-model="signo"
              :items="signos"
              label="Signo Zodiacal"
              placeholder="Seleccionar..."
              required
            ></v-autocomplete>

            <!-- Este menu no es necesario, solo el v-text-field para feedback visual -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Fecha de Nacimiento"
                  prepend-icon
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
           
            
            </v-menu>

            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn color="black" text type="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";
import {mapState, mapMutations} from 'vuex';
export default {
  data: vm => ({
 
  
    name: "",
   signo:'Aries',

    date: "",
    menu: false
  }),

  computed: {
    form() {
      return {
        name: this.name,

        country: this.country
      };

    },
   
...mapState([
  'signos'
]),
...mapState([
  ''
])

   
  },

  watch: {
    name() {
      this.errorMessages = "";
    },

    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "AÑO"));
    }
  },

  methods: {
    
    submit(event) {
      this.$emit("submitData", {
        signo: this.signo,
        name: this.name,
        date: this.date
      });
    },
    
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>
