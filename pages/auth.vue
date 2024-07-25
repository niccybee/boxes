<script setup lang="ts">
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

const email = ref('');
const password = ref('')
const login = ref(false)

const createUser = async () => {
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);

}

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated model
pb.authStore.clear();
</script>
<template>
    <div>
        <form>
            <input type="email" placeholder="Enter email..." name="email"/>
            <input type="password" placeholder="Enter password..." />
            <input type="submit" value="Submit"/>
        </form>
    </div>
</template>