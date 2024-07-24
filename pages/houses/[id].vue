<script setup lang="ts">
definePageMeta({
  name: 'House', 
  template: 'app'
})
import { useRoute } from 'nuxt/dist/app/composables/router';

const route = useRoute()

</script>
<template>

    <div>testing id {{ route }}</div>
</template>