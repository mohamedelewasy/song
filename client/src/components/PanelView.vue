<template>
   <v-app id="inspire">
      <v-main>
         <v-container>
            <v-layout>
               <v-flex>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title v-text="title"></v-toolbar-title>
                        <slot name="action"/>
                     </v-toolbar>
                     <v-card-text>
                       <slot>
                        <small>no content created!</small>
                       </slot>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>


<script>

export default {
  props: [
    'title'
  ]
}
</script>