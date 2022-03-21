<template>
  <div
    class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"
  >
    <v-btn flat> Normal </v-btn>

    <v-btn flat color="primary"> Primary </v-btn>

    <v-btn flat color="secondary"> Secondary </v-btn>

    <v-btn flat color="error"> Error </v-btn>

    <v-btn flat color="success"> Success </v-btn>

    <v-btn flat color="warning"> Warning </v-btn>

    <v-btn flat color="info"> Info </v-btn>

    <v-btn flat disabled> Disabled </v-btn>
  </div>
  <div>
    <h2>hello world</h2>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
};
</script>

<style lang="scss" scoped></style>
