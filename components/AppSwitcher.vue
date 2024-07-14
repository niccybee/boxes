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
            <div class="bg-slate-200 w-full h-full">
                <TabsContent value="room">
                <AppRoom></AppRoom>
            </TabsContent>
            <TabsContent value="box">
                <AppBox></AppBox>
            </TabsContent>
            <TabsContent value="item">
                <AppBox></AppBox>
            </TabsContent>
            </div>
        </Tabs>
    </div>
</template>