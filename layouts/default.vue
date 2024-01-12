<template>
  <div>
    <nav>
      <div class="nav-left">
        <h3>Video Application</h3>
        <nuxt-link to="/">Home</nuxt-link>
      </div>

      <div class="nav-right">
        <button
          class="btn btn-primary"
          v-if="status === 'authenticated'"
          @click.prevent="handleLogout"
        >
          Logout
        </button>
      </div>
    </nav>
    <div class="mainContent">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, signOut, status } = useAuth();
async function handleLogout() {
  await signOut();
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
nav {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem 0;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 25px;
}

a {
  text-decoration: none;
  color: #2b2b2b;
  text-transform: uppercase;
}
</style>
