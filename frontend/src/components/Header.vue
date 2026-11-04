<script setup>
</script>

<template>
    <div class="header">
        <div class="search-box">
            <img src="@/assets/img/search.svg" alt="" class="icon">
            <input type="text" placeholder="Search">
        </div>
            <router-link to='/login' class="logout-btn">Sign out</router-link>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px 30px;

    border-bottom: 1px solid #e2e8f0;
}

.search-box {
    display: flex;

    width: 300px;
    padding: 6px 14px;

    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 20px;
}

.search-box .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

.search-box input {
    width: 100%;

    border: none;
    outline: none;

    font-size: 14px;

    background: transparent;
    color: #1e293b;
}

.logout-btn {
    display: inline-block;

    padding: 8px 15px;

    background-color: #3b82f6;
    color: #ffffff;
    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
}
</style>
