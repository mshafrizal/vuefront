<script>
import { storeToRefs } from 'pinia'
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    const { isLoggedIn } = storeToRefs(authStore)
    const logout = () => {
      authStore.logout()
      router.push('/login')
    }

    return {
      isLoggedIn,
      logout
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Sample App</router-link>
        <button v-if="isLoggedIn" @click="logout" class="btn btn-danger">Logout</button>
        <div v-if="!isLoggedIn" class="d-grid gap-2 d-md-block">
          <button @click="$router.push('/login')" class="btn btn-primary">Login</button>
          <button @click="$router.push('/register')" class="btn btn-outline-primary ms-2">Register</button>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>