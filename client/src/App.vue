<template>
  <v-app>
    <page-header/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/ToolbarView.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    PageHeader,
  }
};
</script>
