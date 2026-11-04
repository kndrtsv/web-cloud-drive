<script setup>
import FileRow from '@/components/FileRow.vue';
import FileCard from '@/components/FileCard.vue';
import files from '@/assets/files.js'
import {computed, ref} from "vue"
import {useRoute} from "vue-router";

const route = useRoute()

const files_array = computed(() => files.filter(file => file.parent === route.params.name))

const isGrid = computed(() => route.name === 'folder')
</script>

<template>
    <div class="content-area">
                <div class="breadcrumbs">Cloud/My files/{{route.params.name}}</div>
                <table v-if="!isGrid" class="file-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last modified</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FileRow v-for="file in files_array" :file="file"/>
                    </tbody>
                </table>
                <div v-else class="grid-container">
                    <FileCard v-for="file in files_array" :file="file"/>
                </div>
            </div>
</template>

<style scoped>
.content-area {
    flex: 1;

    padding: 30px;
}

.breadcrumbs {
    font-size: 13px;
    color: #64748b;

    margin-bottom: 20px;
}

.file-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}

.file-table th {
    padding: 12px;

    text-align: left;
    color: #64748b;
    font-weight: normal;
    border-bottom: 2px solid #e2e8f0;
}

.grid-container {
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

</style>
