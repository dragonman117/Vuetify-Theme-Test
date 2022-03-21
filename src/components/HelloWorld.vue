<template>
  <v-app :theme="theme" id="fullpage">
    <v-btn @click="toggleTheme">toggle theme</v-btn>
    <test-component />
  </v-app>
</template>

<script lang="ts">
import { ref } from "vue";
import TestComponent from "@/components/TestComponent.vue";

export default {
  components: { TestComponent },
  setup() {
    const theme = ref("light");

    return {
      theme,
      toggleTheme: () =>
        (theme.value = theme.value === "light" ? "dark" : "light"),
    };
  },
};
</script>
<style lang="scss" scoped>
#fullpage {
  flex: 1 1 auto;
}
</style>
