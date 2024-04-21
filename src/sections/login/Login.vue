<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formValue = reactive({
  username: '',
  password: '',
})

const handleSubmit = () => {
  if (formValue?.username && formValue?.password) {
    router.push({ path: '/dashboard' })
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <form
      @submit.prevent="handleSubmit"
      class="p-4 rounded-md space-y-4 bg-gray-300 !max-w-xl"
    >
      <h3 class="text-center text-2xl text-black">Login</h3>
      <div>
        <p class="text-base text-gray-900 mb-2">Username</p>
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
          <input
            type="text"
            name="username"
            v-model="formValue.username"
            placeholder="Ketik Username..."
          />
        </label>
      </div>

      <div>
        <p class="text-base text-gray-900 mb-2">Password</p>
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="password"
            v-model="formValue.password"
            placeholder="Ketik Password..."
          />
        </label>
      </div>

      <button type="submit" class="w-full btn btn-success !mt-10 text-white">
        Login
      </button>
    </form>
  </div>
</template>
