<script setup lang="ts">
definePageMeta({
    name: 'App',
    layout: 'app'
})
</script>

<template>
    <div class="p-4 h-screen ">
        <!-- <AppSwitcher></AppSwitcher> -->
        <AppSearcher></AppSearcher>
        <div class="h-full  grid grid-cols-2 grid-rows-2 p-8 gap-8">
            <NuxtLink to="/houses">
                <Card>
                    <CardHeader>
                        <h2>Houses</h2>
                    </CardHeader>
                    <CardContent>
                        v-for house in houses
                    </CardContent>
                    <CardFooter>
                        <Button>Click</Button>
                        <Button variant="secondary">Boom</Button>
                    </CardFooter>
                </Card>
            </NuxtLink>
            <Card>
                <CardHeader>Boxes</CardHeader>
                <CardContent>
                    v-for box in boxes
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
            <Card>
                <CardHeader>Items</CardHeader>
                <CardContent>
                    v-for item in items
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
            <Card>
                <CardHeader>Settings</CardHeader>
                <CardFooter></CardFooter>
            </Card>
        </div>
    </div>
</template>