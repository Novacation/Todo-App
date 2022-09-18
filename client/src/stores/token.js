import { defineStore } from 'pinia'
import axios from 'axios'
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useTokenStore = defineStore('tokenStore', {
  state: () => ({
    token: ''
  }),

  actions: {
    setToken(token) {
      this.token = token
    },

    async verifyToken() {
      //send a post request to the token endpoint, so it can validate the token
      const result = (
        await axios({
          url: '/auth/token',
          headers: {
            'x-access-token': this.token
          },
          method: 'POST'
        })
      ).data.tokenStatus

      return result
    }
  },

  persist: {
    storage: localStorage,
    key: 'userjwt'
  }
})
