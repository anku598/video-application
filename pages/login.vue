<template>
  <div class="container-fluid login-form">
    <div class="title mb-5">
      <h2>Login</h2>
    </div>
    <form @submit.prevent="handleLogin">
      <div class="form-group mb-4">
        <label for="exampleInputEmail1 ">Username</label>
        <input
          type="text"
          v-model="form.username"
          class="form-control mt-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="form.password"
          class="form-control mt-2 mb-4"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
      <nuxt-link class="mx-3" to="/register">Register</nuxt-link>
    </form>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: "guest",
});
const form = ref({
  username: "",
  password: "",
});

const { signIn } = useAuth();

async function handleLogin() {
  try {
    const res = await signIn("credentials", form.value);
    useRouter().push("/");
  } catch (error) {
    console.log(error);
  }
}

useHead({
  title: "Home | Video List",
  meta: [{ name: "description", content: "My amazing site." }],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    },
  ],
});
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
}

form {
  max-width: 600px;
  width: 100%;
  padding: 4rem;
  background: #f5f5f5;
}

input {
  background: none;
  outline: none;
}

a {
  text-decoration: none;
}
</style>
