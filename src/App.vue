<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>
    <v-footer app v-bind="localAttrs">
      <CustomFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentBlock from "@/components/ContentBlock.vue";
import CustomFooter from "@/components/Footer.vue";

export default defineComponent({
  name: "app",

  components: {
    CustomFooter,
    ContentBlock,
  },

  data() {
    return {
      //
    };
  },

  computed: {
    localAttrs() {
      return {
        absolute: true,
        fixed: true,
      };
    },
  },
});
</script>
