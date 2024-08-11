<script setup lang="ts">

const route = useRoute()
const fullPath = route.fullPath;

// console.log('router:', router)
// console.log('route:', route)
// console.log('full path:', fullPath)

const crumbs = computed(()=>{
    const params = fullPath.substring(1).split('/')
    const crumbs = []

    params.forEach((param) => {
        crumbs.push(param);
    })

    return crumbs
})
// TODO add title case to the crumb
</script>
<template>
    <div class="flex items-center justify-between">
        <div>
            <nav>
                <!-- TODO: if user logged in go to app if not go home -->
                <nuxt-link to="/app"><BoxSvg/></nuxt-link>
            </nav>
            <Breadcrumb>
                <BreadcrumbList>
                    <template v-for="(crumb,index) in crumbs">
                        <BreadcrumbItem>
                            <BreadcrumbLink :href="'/'+crumb">
                                {{crumb}}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator v-if="index !== crumbs.length - 1"  />
                    </template>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div>
            Other Side
        </div>
    </div>
</template>