<template>
  <div>
    <v-app-bar fade-img-on-scroll color="#fff" absolute max-height="65px" elevation="2">
      <v-btn plain :to="'/'"
        ><v-img
          max-height="40"
          max-width="160"
          src="@/assets/img/vlogo.png"
          lazy-src="@/assets/img/vlogo.png"
        ></v-img
      ></v-btn>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn @click="drawer = !drawer">Menu</v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class="font-weight-bold"
          plain
          v-for="link in links"
          :key="link.id"
          :to="link.move"
          color="#312B6F"
        >
          <v-icon left>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.id" :to="link.move">
          <v-list-item-icon>
            <v-icon small>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      drawer: false,
      links: [
        { id: 1, title: "About", move: "/about", icon: "mdi-domain" },
        { id: 2, title: "Services", move: "/services", icon: "mdi-star" },
        { id: 3, title: "Jobs", move: "/jobs", icon: "mdi-map" },
        { id: 4, title: "Contact", move: "/contact", icon: "mdi-phone" },
      ],
    };
  },
};
</script>

<style>
.font-weight-bold {
  color: #312b6f;
  /* box-shadow: 0 4px 8px rgba(0, 8, 19, 0.1); */
}
.v-navigation-drawer {
  position: absolute;
  z-index: 1000;
}
</style>
