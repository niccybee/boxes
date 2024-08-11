<script setup lang="ts">
</script>
<template>
    <div class="bg-slate-200 min-h-screen">
        <div class="bg-slate-100 w-full py-4 px-2" id="main">
            <AppHeader></AppHeader>
            <AppLaunchNew></AppLaunchNew>
        </div>
      <NuxtPage/>
      <NuxtLoadingIndicator />
    </div>
  </template>

<style>
#main {}
</style>