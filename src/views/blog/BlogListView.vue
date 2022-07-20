<template>
    <div class="container">
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input v-model="state.title" type="text" name="title" id="title" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="metaTitle" class="form-label">Meta Title</label>
          <input v-model="state.metaTitle" type="text" name="metaTitle" id="metaTitle" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="slug" class="form-label">Slug</label>
          <input v-model="state.slug" type="text" name="slug" id="slug" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="summary" class="form-label">Summary</label>
          <textarea v-model="state.summary" type="text" name="summary" id="summary" class="form-control"></textarea>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea v-model="state.content" name="content" id="content" class="form-control" ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useBlogStore } from "../../stores/blog"
export default {
  setup() {
    const blogStore = useBlogStore()
    const state = reactive({
      title: "",
      metaTitle: "",
      slug: "",
      summary: "",
      content: "",
    })
    async function submit() {
      await blogStore.createBlog(state).then(res => {
        if (res.status === 200) {
          console.log('success')
        } else {
          console.log(res)
        }
      }).catch(error => console.log(error))
    }
    return {
      submit,
      state
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
