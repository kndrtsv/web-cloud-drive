<script setup>
import {computed} from "vue";
import folderIcon from '@/assets/img/folder.svg';
import fileIcon from '@/assets/img/file.svg';
import imageIcon from '@/assets/img/file-image.svg';

const props = defineProps({
    file: {}
});

const icon = computed(() => {
    if (props.file.type === 'folder') {
        return folderIcon;
    } else if (props.file.type === 'image') {
        return imageIcon;
    } else {
        return fileIcon;
    }
});

const isFolder = computed(() => props.file.type === 'folder')
const link = computed(() => `/folder/${props.file.name}`)
</script>

<template>
    <tr>
        <td><img :src="icon" alt="" class="icon">
            <router-link v-if="isFolder" :to="link" class="no-link">{{file.name}}</router-link>
            <span v-else>{{file.name}}</span>
        </td>
        <td>{{file.modified}}</td>
        <td>{{file.size}}</td>
    </tr>
</template>

<style scoped>
td {
    padding: 12px;

    text-align: left;
    border-bottom: 1px solid #f1f5f9;
}

tr:hover td {
    background-color: #f8fafc;
}
</style>
