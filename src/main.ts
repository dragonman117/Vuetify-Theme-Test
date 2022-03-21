import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { components, directives } from "vuetify/dist/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createVuetify } from "vuetify";

loadFonts();

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
