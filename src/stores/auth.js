import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
        email: "",
        id: null,
    }
  }),
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: () => localStorage.getItem('token')
  },
  actions: {
    async login(payload) {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        this.setCredential({ email: payload.email, id: null, token: response.token})
        return response
    },
    async register(payload) {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        this.setCredential({ email: payload.email, id: response.id, token: response.token})
        return response
    },
    setCredential(payload) {
        this.email = payload.email
        this.id = payload.id
        localStorage.setItem('token', JSON.stringify(payload.token))
    }
  }
})
