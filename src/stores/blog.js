import { defineStore } from 'pinia'
import { firebaseInstance } from '../plugins/firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore';
const db = getFirestore(firebaseInstance)
export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({}),
  getters: {},
  actions: {
    async getBlogs() {
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
    async createBlog(payload) {
        try {
            console.log('payload', payload)
            const docRef = await addDoc(collection(db, "blogs"), {
                title: payload.title,
                meta_title: payload.metaTitle,
                summary: payload.summary,
                content: payload.content
            })
            console.log('docref', docRef)
            return {
                status: 200,
                data: docRef.id
            }
        } catch (error) {
            return {
                status: 400,
                message: error
            }
        }
    },
  }
})
