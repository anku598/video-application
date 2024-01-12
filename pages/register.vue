<template>
  <div class="container-fluid register-form">
    <div class="title mb-5">
      <h2>Register</h2>
    </div>
    <form @submit.prevent="handleRegister">
      <div class="form-group mb-4">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control mb-4"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />

        <label for="exampleInputEmail1">Username</label>
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

      <button :disabled="isLoading" type="submit" class="btn btn-primary">
        {{ isLoading ? "Loading..." : "Register" }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  email: "",
  password: "",
  username: "",
});

const isLoading = ref(false);

async function handleRegister() {
  try {
    isLoading.value = true;
    await useFetch("/api/auth/register", {
      method: "POST",
      body: form.value,
    });

    useRouter().push("/login");
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
}

useHead({
  title: "SignIn",
  meta: [{ name: "description", content: "Sign In" }],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    },
  ],
});
</script>

<style scoped>
.register-form {
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
