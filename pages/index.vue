<template>
  <v-container fluid>
    <Menu />
    <v-layout wrap>
      <v-flex>
        <v-row justify="center">
          <img src="~/assets/2419790.jpg" height="600px" width="1000px" />
          <!-- v-img ? La imagen se ve alargada -->
        </v-row>
      </v-flex>
    </v-layout>

    <v-divider class="mt-5"></v-divider>

    <Form @submitData="submitData" />

    <v-divider class="mt-5"></v-divider>

  

    <div v-if="signo">
      <h3>

        <center>Nombre y Apellido: {{ name }}</center>
      </h3>
      <br />
      <h3>
        <center>Fecha de Nacimiento: {{ date }}</center>
      </h3>

      <v-card-actions>
        <img :src="signos[signo].imagen" height="500px" width="750px" />
        <v-spacer></v-spacer>
        <p>{{ signos[signo].parrafo }}</p>
      </v-card-actions>
    </div>
    <div v-else>No haz ingresado tu signo</div>
  </v-container>
</template>

<script>
import Form from "~/components/Form.vue";
import Menu from "~/components/Menu.vue";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      
      
      signos: {
        // TODO: No se usaBA (ver Piscis en el html y en this.signos)
        Virgo: {
          texto: "Virgo",
          imagen: require("../assets/virgo.png"),
          parrafo:
            " Virgo es un signo de Tierra. Esto significa que, al igual que Tauro y Capricornio, las personas nativas de este signo tienen un eminentemente sentido práctico, son muy tenaces, constantes, responsables y poseen un punto de melancolía."
        },
        Tauro: {
          texto: "Tauro",
          imagen: require("../assets/Tauro.png"),
          parrafo:
            " Se trata de un signo de Tierra, por tanto las personas nacidas bajo este signo son muy prudentes, tenaces y de sentido bastante práctico. Casi siempre les envuelve un halo de melancolía. Son personas muy trabajadoras, metódicas y responsables. No son soñadores, sino que les gusta tener los pies bien en la tierra, y ser reservados con sus cosas."
        },

        Aries: {
          texto: "Aries",
          imagen: require("../assets/Aries.png"),
          parrafo:
            "  Aries es el primero signo del horóscopo de modo que muchos lo interpretan como el signo que marca el comienzo de algo…enérgico yalgo turbuletno. Aries es un signo además con distintos matices para cada una de las facetas de la vida. Veamos ahora, el significado del signo de Aries en el horóscopo."
        },

        Piscis: {
          texto: "Piscis",
          imagen: require("../assets/Piscis.png"),
          parrafo:
            "Piscis es el signo zodiacal al que pertenecen las personas nacidas entre el 19 de febrero y el 20 de marzo. De acuerdo a la astrología, Piscis es un signo mutable (se pueden encontrar características opuestas en una única personalidad) y femenino, que se halla gobernado por Júpiter y Neptuno."
        }
      }
    };
  },

  components: {
    Form: Form,
    Menu: Menu
  },

  methods: {
    submitData(data) {
      console.log(data);
      this.$store.commit("submitData", {
        name: data.name,
        signo: data.signo,
        date: data.date
      });
    }
  },

  computed: {
    ...mapState(['name','signo','date'])
    
  }
};
</script>
