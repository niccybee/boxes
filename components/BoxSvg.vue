<script setup lang="ts">
const props = defineProps({
    w: { type: String, default: '8' },
    h: { type: String, default: '8' },
    t: { type: String, default: '8' },
})

const size = computed(()=> {
    return `w-${props.w} h-${props.h} text-${props.t}`
})
</script>
<template>
    <div class="p-1 rounded-md hover:bg-slate-200 border-1 " :class="size">📦</div>
</template>