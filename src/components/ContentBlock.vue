<template>
  <v-container>
    <v-row align="start" justify="center" class="ma-4">
      <v-col cols="12">
        <!--        <v-img :src="logo" class="my-3" contain height="200" />-->
      </v-col>

      <v-col cols="12" md="4">
        <custom-filters />
      </v-col>

      <v-col cols="12" md="4">
        <div class="loader" v-if="isShowLoader">
          <v-progress-linear indeterminate color="black"> </v-progress-linear>
        </div>
        <v-card max-width="450" class="mx-auto card" :class="{ 'zero-height': isLoading }">
          <v-list lines="two">
            <v-list-subheader> List </v-list-subheader>
            <v-list-item v-for="(user, index) in usersList" :key="user.title">
              <template v-slot:prepend>
                <v-avatar size="large">
                  <v-menu class="mr-3">
                    <template v-slot:activator="{ props }">
                      <v-btn icon v-bind="props">
                        <v-avatar size="large">
                          <v-img :src="user.prependAvatar"></v-img>
                        </v-avatar>
                      </v-btn>
                    </template>
                    <v-card :text="user.data.address" max-width="200px"> </v-card>
                  </v-menu>
                </v-avatar>
              </template>
              <template v-slot:title>
                <div v-html="user.title"></div>
              </template>
              <template v-slot:subtitle>
                <div v-html="user.subtitle"></div>
              </template>
              <v-divider class="mt-3" v-if="index < usersList.length - 1"></v-divider>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import logo from "@/assets/logo.svg";
import CustomFilters from "@/components/CustomFilters.vue";
import type { IUser } from "@/utils/types";
import { SCORE_FILTER } from "@/utils/types";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "content-block",
  components: { CustomFilters },

  data() {
    return {
      // logo,
      isLoading: false,
      isShowLoader: false,
      usersList: [] as IUser[],
    };
  },

  computed: {
    ...mapGetters({
      countryFilterValue: "getCountryFilterValue",
      scoreFilterValue: "getScoreFilterValue",
      users: "getUsers",
    }),
  },

  watch: {
    countryFilterValue() {
      this.getUserList();
    },
    scoreFilterValue() {
      this.getUserList();
    },
  },

  methods: {
    ...mapActions({
      getUsers: "getUsers",
    }),

    fetchUsers(): void {
      this.isLoading = true;
      this.getUsers();
      this.isLoading = false;
    },

    filterUsers(): IUser[] {
      return this.users.filter((user: IUser) => {
        if (!user.data) {
          return true;
        }
        if (this.countryFilterValue && user.data.country !== this.countryFilterValue) {
          return false;
        }
        switch (this.scoreFilterValue) {
          case SCORE_FILTER.LESS_10:
            return user.data.score < 10;
          case SCORE_FILTER.MORE_20:
            return user.data.score > 20;
          default:
            return true;
        }
      });
    },

    getUserList(): void {
      this.isLoading = true;
      setTimeout(() => {
        this.isShowLoader = true;
      }, 1000);
      setTimeout(() => {
        const list = [];
        const filterUsers = this.filterUsers();

        // add dividers
        filterUsers.forEach((user, index) => {
          list.push(user);
          // if (index < filterUsers.length - 1) {
          //   list.push({ type: "divider", inset: true });
          // }
        });

        // add subheader
        // list.unshift({ type: "subheader", title: "List" });
        this.usersList = list;
        this.isLoading = false;
        this.isShowLoader = false;
      }, 3000);
    },
  },

  mounted() {
    this.fetchUsers();
    this.getUserList();
  },
});
</script>

<style scoped>
.card {
  transition: max-height 0.5s ease-out;
  max-height: 100vh;
}
.zero-height {
  max-height: 0;
}
.loader {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
