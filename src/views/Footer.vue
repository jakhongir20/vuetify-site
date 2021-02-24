<template>
  <v-footer class="pa-5" absolute>
    <v-main
      ><p>
        <span>&copy; Copyright {{ new Date().getFullYear() }}</span> - All right reserved
      </p>
    </v-main>
    <v-spacer></v-spacer>
    <v-main>
      <v-btn
        tag="a"
        text
        v-for="social in socials"
        :key="social.link"
        :href="social.link"
        target="_blank"
        ><v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </v-main>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { link: "https://facebook.com", icon: "mdi-facebook" },
        { link: "https://instagram.com", icon: "mdi-instagram" },
        { link: "https://telegram.com", icon: "mdi-telegram" },
      ],
    };
  },
};
</script>

<style scoped>
@media (max-width: 525px) {
  .spacer {
    flex-grow: 0 !important;
  }
  .v-main {
    text-align: center;
    display: block;
    flex: 1 1 auto;
  }
  .v-main[data-v-71f682d5] {
    flex: 1 1 auto;
  }
}
v-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-main {
  flex: 0 1 auto;
}
p {
  font-family: "Montserrat", sans-serif;
}
span {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
.v-application p {
  margin-bottom: 0;
}
</style>
