<script setup lang="ts">
definePageMeta({
    name: 'App',
    layout: 'app'
})
</script>

<template>
    <main class="min-h-[85svh] flex flex-col justify-around">
        
        <section class="flex items-center justify-center">
            <BoxSvg t="6xl"/>
        </section>
        <section class="flex items-center justify-around min-h-[80%]">
            <Card class="flex items-center justify-center w-1/4 min-h-16">🔎</Card>
            <Card class="flex items-center justify-center w-1/4 min-h-16">➕</Card>
            <Card class="flex items-center justify-center w-1/4 min-h-16">🏠</Card>

        </section>
    </main>
</template>