<template>
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
        <div class="card">
            <div class="card-body">
                <h1 class="text-center">Register</h1>
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input v-model="form.email" placeholder="eve.holt@reqres.in" class="form-control" type="email" name="email" id="email" autocomplete="email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="password">Password</label>
                        <input v-model="form.password" placeholder="Type your password" class="form-control" type="password" name="password" id="password" autocomplete="new-password">

                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit" :disabled="loading">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
export default {
    setup() {
        const authStore = useAuthStore()
        const router = useRouter()
        const form = reactive({
            email: "",
            password: ""
        })
        const loading = ref(false)
        const submit = async function() {
            loading.value = true
            await authStore.register(form).finally(() => loading.value = false)
            router.push('/')
        }
        return {
            submit,
            form,
            loading
        }
    }
}
</script>

<style>
</style>
