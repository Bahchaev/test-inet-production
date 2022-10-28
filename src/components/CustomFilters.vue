<template>
  <v-select v-model="countryFilterSelected" :items="countryFilters" clearable label="Filter by country"></v-select>
  <v-select v-model="scoreFilterSelected" :items="scoreFilters" clearable label="Filter by score"></v-select>
</template>

<script lang="ts">
import { COUNTRY_FILTER, SCORE_FILTER } from "@/utils/types";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "custom-filters",
  computed: {},
  data() {
    return {
      countryFilters: [COUNTRY_FILTER.RUSSIA, COUNTRY_FILTER.USA],
      scoreFilters: [SCORE_FILTER.LESS_10, SCORE_FILTER.MORE_20],
      countryFilterSelected: null,
      scoreFilterSelected: null,
    };
  },
  watch: {
    countryFilterSelected(value: COUNTRY_FILTER) {
      this.selectCountryFilter(value);
    },
    scoreFilterSelected(value: SCORE_FILTER) {
      this.selectScoreFilter(value);
    },
  },
  methods: {
    ...mapActions({
      setCountryFilters: "setCountryFilters",
      setScoreFilter: "setScoreFilter",
    }),
    selectCountryFilter(value: COUNTRY_FILTER) {
      this.setCountryFilters(value);
    },
    selectScoreFilter(value: SCORE_FILTER) {
      this.setScoreFilter(value);
    },
  },
});
</script>
