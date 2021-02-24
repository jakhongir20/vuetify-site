<template>
  <div class="contacts">
    <v-container>
      <div class="contacts-row">
        <div class="contacts-col">
          <div
            style="
              max-width: 800px;

              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <!-- <div>
            <h1>Your coordinates:</h1>
            <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
          </div>
          <div>
            <h1>Map coordinates:</h1>
            <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
          </div> -->
          </div>
          <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            class="_map"
            style="width: 90%; height: 420px; margin: 32px auto"
            ref="mapRef"
            @dragend="handleDrag"
          ></GmapMap>
        </div>
        <div class="contacts-col">
          <div>
            <v-card style="color: #fff; background-color: #312b6f">
              <v-card-title>Contacts</v-card-title>
              <v-card-actions style="background: #fff; padding: 10px 16px">
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  style="width: 100%; margin-top: 20px"
                >
                  <v-text-field
                    style="width: 100%"
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="Phone"
                    required
                    placeholder="+998 ()"
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >
                    Submit
                  </v-btn>
                </v-form>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 7,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phone: "",
      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) => (v && v.length <= 13) || "Phone number must be valid",
      ],
    };
  },
  created() {
    // does the user have a saved center? use it instead of the default
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center);
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then((coordinates) => {
          this.myCoordinates = coordinates;
        })
        .catch((error) => alert(error));
    }

    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    handleDrag() {
      // get center and zoom level, store in localstorage
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      let zoom = this.map.getZoom();

      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }

      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4),
      };
    },
  },
};
</script>

<style scoped>
.contacts {
  margin: 100px 0;
}
.contacts-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contacts-col {
  flex: 0 1 60%;
}
.contacts-col:last-child {
  flex: 1 1 auto;
}
@media (max-width: 730px) {
  .contacts-row {
    display: block;
  }
  ._map {
    width: 100%;
  }
}
</style>
