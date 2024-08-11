<script setup lang="ts">

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

definePageMeta({
  name: 'House',
  layout: 'app'
})

const route = useRoute()
const data = ref(null)

const getSingleHouse = async () => {
  const id = route.params.id;
  const record = await pb.collection('House').getOne(id, {
    expand: 'relField1,relField2.subRelField',
  });
  console.log(record);
  data.value = await record;
  return record;
}

getSingleHouse();

</script>
<template>
  <div>
    <div v-if="data">
      <h2 class="font-bold text-2xl" >{{data.name}}</h2>
      <Card class="container grid grid-cols-3 grid-rows-3">
        <div v-for="box in data.box" class="bg-slate-100 p-2 rounded-md">
          <p>{{box}}</p>
        </div>
      </Card>
    </div>
    <hr>
  </div>
</template>