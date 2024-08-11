<script setup lang="ts">
const props = defineProps({
    active: Boolean
})
</script>
<template>
    <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full" v-if="active">
        <Card class="absolute">
        <CardContent>
            <Tabs default-value="item" class="flex flex-col justify-center w-full">
                <h3 class="pt-6 pb-3 text-xl font-bold text-center">Create New</h3>
                <TabsList class="w-full">
                    <TabsTrigger value="item" class="w-1/3">
                        Item
                    </TabsTrigger>
                    <TabsTrigger value="box">
                        Box
                    </TabsTrigger>
                    <TabsTrigger value="house">
                        House
                    </TabsTrigger>
                </TabsList>
                <div class="p-1 my-2 border border-solid rounded-md border-1">
                    <TabsContent value="item">
                        <div class="w-full bg-blue-100">Create New Item</div>
                    </TabsContent>
                    <TabsContent value="box">
                        Create New Box
                    </TabsContent>
                    <TabsContent value="house">
                        Create New House
                    </TabsContent>
                </div>
            </Tabs>

        </CardContent>

    </Card>
    </div>
</template>