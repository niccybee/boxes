<template>
    <div class="w-full flex items-center justify-center bg-green-100">
        <Tabs default-value="room" class="w-[400px] flex flex-col items-center justify-center">
            <TabsList>
                <TabsTrigger value="room">
                    Room
                </TabsTrigger>
                <TabsTrigger value="box">
                    Box
                </TabsTrigger>
                <TabsTrigger value="item">
                    Item
                </TabsTrigger>
            </TabsList>

            <TabsContent value="room" class="w-full h-full">
                <AppRoom></AppRoom>
            </TabsContent>
            <TabsContent value="box" class="w-full h-full">
                <AppBox></AppBox>
            </TabsContent>
            <TabsContent value="item" class="w-full h-full">
                <AppItem></AppItem>
            </TabsContent>

        </Tabs>
    </div>
</template>