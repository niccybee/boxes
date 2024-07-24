<script setup lang="ts">
import { useRoute } from 'nuxt/dist/app/composables/router';

const route = useRoute()

</script>
<template>

    <div>testing id {{ route }}</div>
</template>