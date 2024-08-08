<script setup lang="ts">
const router = useRouter()

const  currentRoute  = JSON.stringify(router.currentRoute, null, '\t')

const test = [1,2,3]
</script>
<template>
    <div class="flex items-center justify-between">
        <div>
            <nav>
                <span>Box App </span>
                <nuxt-link to="/app">App</nuxt-link>
                <nuxt-link to="/auth">Auth</nuxt-link>
                <nuxt-link to="/items">Items</nuxt-link>
            </nav>
            <Breadcrumb>
                <BreadcrumbList>
                    <template v-for="c in test">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/app">
                                hello
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </template>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div>
            Other Side
        </div>
    </div>
</template>