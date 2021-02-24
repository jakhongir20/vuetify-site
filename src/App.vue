<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.margin {
  padding: 20px 0;
}
</style>
