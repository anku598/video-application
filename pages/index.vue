<template>
  <div>
    <div class="container-fluid list-container">
      <div class="row">
        <div
          class="col-md-3 mb-4 items"
          v-for="(video, idx) in videoList.videos"
          :key="'video' + idx"
        >
          <nuxt-link class="image-wrap" :to="`/video/${video.id}`">
            <img :src="video.image" alt="" />
          </nuxt-link>

          <nuxt-link :to="`/video/${video.id}`" class="btn btn-warning"
            >Watch Video</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

const { data: videoList } = await useFetch(
  "https://api.pexels.com/videos/popular?per_page=10",
  {
    headers: {
      Authorization: "XMhaWtZ57UdJSxa30eLsmgdAtdyOXEU5MeP1TVBWL4hp0dx4STeszUjX",
    },
  }
);
</script>

<style scoped>
.list-container {
  width: 90%;
  margin: 0 auto;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: #2b2b2b;
}

.image-wrap {
  width: 100%;
  height: 30vh;
  display: inline-flex;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
