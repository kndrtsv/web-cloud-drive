<script setup></script>

<template>
<aside class="sidebar">
    <div class="logo">Cloud</div>
    <button class="btn upload-btn">Upload</button>
        <router-link to="/" class=no-link>
            <a href="`/folder/${file.name}`" class="nav-link active"><img src="@/assets/img/folder.svg" alt="" class="icon">My files</a>
        </router-link>
        <a href="#" class="nav-link"><img src="@/assets/img/user-round-group.svg" alt="" class="icon">Shared</a>
        <a href="#" class="nav-link"><img src="@/assets/img/clock.svg" alt="" class="icon">Recent</a>
        <a href="#" class="nav-link"><img src="@/assets/img/star.svg" alt="" class="icon">Favorites</a>
        <a href="#" class="nav-link"><img src="@/assets/img/trash.svg" alt="" class="icon">Trash</a>
            
        <div class="storage-info">
            Storage used
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div style="margin-top: 5px;">15GB of 50GB</div>
        </div>
</aside>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;

    width: 240px;
    min-height: 100vh;

    padding: 20px;

    background: #f8fafc;
    border-right: 1px solid #e2e8f0;
}

.upload-btn {
    margin-bottom: 20px;

    font-size: 14px;
}

.nav-link {
    display: flex;

    margin-bottom: 4px;
    padding: 10px;

    font-size: 14px;
    color: var(--text-primary);

    border-radius: 6px;

    text-decoration: none;
    transition: background 0.2s, color 0.2s;
}

.nav-link.active,
.nav-link:hover {
    background: #e2e8f0;
    color: #0f172a;
    font-weight: 500;
}

.storage-info {
    margin-top: auto;

    font-size: 12px;
    color: #64748b;
}

.progress-bar {
    height: 6px;

    margin-top: 8px;

    background: #cbd5e1;
    border-radius: 3px;
}

.progress-fill {
    width: 30%;
    height: 100%;

    background: #3b82f6;
    border-radius: 3px;
}
</style>
