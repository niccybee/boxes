<script setup lang="ts">
import { useRoute } from 'nuxt/dist/app/composables/router';
definePageMeta({
  name: 'House',
  layout: 'app'
})

const route = useRoute()

</script>
<template>

  <div>testing id {{ route }}</div>
</template>