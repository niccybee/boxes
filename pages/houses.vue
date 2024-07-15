<script setup lang="ts">
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

// fetch a paginated records list
const resultList = await pb.collection('House').getList(1, 50, {
    filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
});

// you can also fetch all records at once via getFullList
const records = await pb.collection('House').getFullList({
    sort: '-created',
});

// or fetch only the first record that matches the specified filter
const record = await pb.collection('House').getFirstListItem('someField="test"', {
    expand: 'relField1,relField2.subRelField',
});
</script>
<template><div>
    <h1>Houses</h1>
    <div class="h-screen bg-purple-100">
        <Card>
            <CardHeader></CardHeader>
            <CardFooter></CardFooter>
        </Card>
        <Card>
            <CardHeader></CardHeader>
            <CardFooter></CardFooter>
        </Card>
    </div>
</div></template>