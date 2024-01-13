<template>
  <div class="container-fluid video-wrap">
    <video controls>
      <source :src="videoListDetails.video_files[0].link" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
const route = useRoute();

const { data: videoListDetails } = await useFetch(
  `https://api.pexels.com/videos/videos/${route.params.id}`,
  {
    headers: {
      Authorization: "XMhaWtZ57UdJSxa30eLsmgdAtdyOXEU5MeP1TVBWL4hp0dx4STeszUjX",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  }
);
</script>

<style scoped>
.video-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
video {
  width: 60vh;
  height: 50vh;
}
</style>
