<script setup lang="ts">
definePageMeta({
  name: 'Home', 
  template: 'app'
})
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

// you can also fetch all records at once via getFullList
const houses = await pb.collection('House').getFullList({
    sort: '-created',
})
</script>
<template>
    <div>
        <h1>Houses</h1>
        <div class="h-screen bg-purple-100">
            <Card v-for="h in houses">
                <CardHeader>
                    <h1>{{ h.name }}</h1>
                </CardHeader>
                <CardContent>{{ h.boxes }}</CardContent>
                <CardFooter>{{ h }}</CardFooter>
            </Card>

        </div>
    </div>
</template>