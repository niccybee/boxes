<script setup lang="ts">
import PocketBase from 'pocketbase';

definePageMeta({
    name: 'Auth',
    layout: 'app'
})

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

const email = ref('');
const password = ref('')
const login = ref(false)
const loading = ref(false)

const createUser = async () => {
    loading.value = true;
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);
    console.log(authData)

}

const loginUser = async () => {
    loading.value = true;
    setTimeout(()=>loading.value = false, 2000)
}

// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model.id);

// "logout" the last authenticated model
pb.authStore.clear();
</script>

<template>
    <main class="w-full h-full flex items-center justify-center p-8">
        <div class=" p-8">
            email: {{ email }} <br/>
            pass: {{ password }}
            <Tabs default-value="signup" class="w-[400px]">
                <TabsList class="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">
                        Sign Up
                    </TabsTrigger>
                    <TabsTrigger value="login">
                        Log In
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="signup" class="flex items-center justify-center">
                    <Card class="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle class="text-2xl">
                                Sign Up
                            </CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="grid gap-4">
                            <div class="grid gap-2">
                                <Label for="email">Email</Label>
                                <!-- <Input class="border-1 border-solid" id="email" type="email" placeholder="m@example.com" :value="email" required /> -->
                                <input class="border-1 border-solid" type="email" v-model="email" placeholder="Enter email..."/>
                            </div>
                            <div class="grid gap-2">
                                <Label for="password">Password</Label>
                                <!-- <Input class="border-1 border-solid" id="password" type="password" placeholder="Enter password..." required /> -->
                                <input class="border-1 border-solid" type="password" v-model="password" placeholder="Enter password..."/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button :disabled="loading" class="w-full" @click="createUser">
                                {{ loading ? 'Loading' : 'Sign Up' }}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login" class="flex items-center justify-center">
                    <Card class="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle class="text-2xl">
                                Log In
                            </CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="grid gap-4">
                            <div class="grid gap-2">
                                <Label for="email">Email</Label>
                                <!-- <Input class="border-1 border-solid" id="email" type="email" placeholder="m@example.com" required /> -->
                                <input class="border-1 border-solid" type="email" v-model="email" placeholder="Enter email..."/>
                            </div>
                            <div class="grid gap-2">
                                <Label for="password">Password</Label>
                                <!-- <Input class="border-1 border-solid" id="password" type="password" placeholder="Enter password..." required /> -->
                                <input class="border-1 border-solid" type="password" v-model="password" placeholder="Enter password..."/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button :disabled="loading" class="w-full" @click="loginUser">
                                {{ loading ? 'Loading' : 'Sign in' }}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </main>
</template>
