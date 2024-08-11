<script setup lang="ts"></script>
<template>
    <section v-if="view === 'list'">
        <Table>
            <TableHeader></TableHeader>
            <TableBody>
                <template v-if="data">
                    <TableRow v-for="row in data">
                        <TableCell v-for="cell in row">{{ cell }}</TableCell>
                    </TableRow>
                </template>
                <template v-else>
                    <TableRow>
                        <TableCell>No results.</TableCell>
                    </TableRow>
                </template>
            </TableBody>
        </Table>
    </section>
</template>