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
    <div class="grid-item">
        <div class="grid-img"></div>
        <div class="grid-info">
            <strong><img :src="icon" alt="" class="icon">{{file.name}}</strong>
        </div>
    </div>
</template>

<style scoped>
.grid-item {
    border: 1px solid #e2e8f0;
    border-radius: 8px;

    background: #fff;

    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
}

.grid-item:hover {
    transform: translateY(-2px);

    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.grid-img {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 120px;

    font-size: 13px;
    color: white;

    background: #64748b;
}

.grid-info {
    padding: 12px;

    font-size: 12px;
    color: #64748b;
}

.grid-info strong {
    display: flex;
    align-items: center;

    margin-bottom: 4px;

    font-size: 13px;
    color: #1e293b;
}
</style>
