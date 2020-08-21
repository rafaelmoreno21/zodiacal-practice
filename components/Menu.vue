<template>
  <div>
    <v-menu transition="slide-x-transition" bottom right>
      <template v-slot:activator="{ on }">
        <v-btn class="black" color="primary" dark v-on="on">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i"  href="/">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-list-item v-for="(item1, i) in items1" :key="i"  href="/inspire">
          <v-list-item-title>{{ item1.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Inicio" }],
    items1: [{ title: "Inspire" }],
  })
};
</script>



        
    
