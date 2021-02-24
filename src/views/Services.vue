<template>
  <div class="services">
    <v-row class="ma-4">
      <v-col v-for="(card, i) in cards" :key="i">
        <v-card class="mx-auto _vcard">
          <v-img :src="card.img" height="200px"></v-img>
          <v-card-title> {{ card.title }} </v-card-title>
          <v-card-actions>
            <v-btn color="orange lighten-2" text> More.. </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="card.show = !card.show">
              <v-icon>{{ card.show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>
              <v-card-text>
                {{ card.text }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Web site",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo animi repudiandae aspernatur corporis illo.",
        show: false,
      },
      {
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        title: "Web Design",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo animi repudiandae.",
        show: false,
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        title: "SEO",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo animi.",
        show: false,
      },
    ],
  }),
};
</script>

<style scoped>
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px 0;
}
._vcard {
  max-width: 344px;
}
@media (max-width: 380px) {
  ._vcard {
    max-width: 300px;
  }
}
</style>
