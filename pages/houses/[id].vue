<script setup lang="ts">
definePageMeta({
  name: 'House',
  layout: 'app'
})

const router = useRouter()
const paramId = router.params

const getSingleHouse = async (params: type) => {
  const id = router.params;

}



</script>
<template>
  <div>testing router {{ router }}</div>
  <hr>
  <div>testing id {{ paramId }}</div>
</template>