<script setup lang="ts">
const view = ref('list');
const data = ref([
    { id: 1, name: 'Item one', description: 'I am the item one now run' },
    { id: 2, name: 'Item two', description: 'I am the item two now poo' },
])

</script>
<template>
    <main>
        <section>
            <Card class="w-full p4"></Card>
        </section>
        <section class="flex flex-col gap-4 p-4">
            <Card class="w-full px-4 py-2 rounded-sm" v-for="item in data">{{ item }}</Card>
        </section>
    </main>
</template>