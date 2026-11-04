<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="layout-main">
    <Sidebar />
    <div class="layout-body">
        <Header />
        <slot />
    </div>
</div>
</template>

<style scoped>
.layout-main {
    display: flex;
}

.layout-body {
    flex: 1;
}
</style>
