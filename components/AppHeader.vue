<script setup lang="ts">
const router = useRouter()

const  currentRoute  = JSON.stringify(router.currentRoute, null, '\t')

const test = [1,2,3]
</script>
<template>
    <div class="flex items-center justify-between">
        <div>
            <nav>
                Box App - {{ currentRoute }}
            </nav>
            <Breadcrumb>
                <BreadcrumbList>
                    <template v-for="c in test">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
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