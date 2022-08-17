import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useTokenStore = defineStore("tokenStore", {
  state: () => ({
    token: "",
  }),

  actions: {
    setToken(token) {
      this.token = token;
    },
  },
});
