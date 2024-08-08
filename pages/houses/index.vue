<script setup lang="ts">
import PocketBase from 'pocketbase';

definePageMeta({
    name: 'Home',
    layout: 'app'
})

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

// you can also fetch all records at once via getFullList
const houses = await pb.collection('House').getFullList({
    sort: '-created',
})

const makeHouseUrl = (params:string) => {
    return `houses/${params}`
}
</script>
<template>
    <div>
        <h1>Houses</h1>
        <div class="h-screen bg-purple-100">
            <NuxtLink v-for="h in houses" :to="makeHouseUrl(h.id)">
                <Card >
                <CardHeader>
                    <h1>{{ h.name }}</h1>
                </CardHeader>
                <CardContent>{{ h.boxes }}</CardContent>
                <CardFooter>{{ h }}</CardFooter>
            </Card>
            </NuxtLink>
        </div>
    </div>
</template>