<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const login = ref('')
const password = ref('')
const errors = ref({
    login: '',
    password: ''
})

const submit = () => {
    errors.value.login = ''
    errors.value.password = ''

    if (login.value.trim().length === 0) {
        errors.value.login = 'Login is required'
    }

    if (password.value.trim().length === 0) {
        errors.value.password = 'Password is required'
    }

    if (!errors.value.login && !errors.value.password) {
        router.push('/')
    }
}
</script>

<template>
<div class="auth-wrapper">
        <div class="logo">Cloud</div>
        <div class="auth-card">
            <h2>Sign in to your account</h2>
            <form @submit.prevent='submit'>
                <input type="text" placeholder="Username or email" v-model="login">
                <div class="errors">{{errors.login}}</div>
                <input type="password" placeholder="Password" v-model="password">
                <div class="errors">{{errors.password}}</div>
                <div class="auth-options">
                    <label><input type="checkbox"> Remember me</label>
                    <a href="#" class="no-link">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Sign in</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.errors {
    margin-bottom: 8px;

    font-size: 12px;
    color: red;
}

.auth-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: #f8fafc;
}

.auth-card {
    width: 340px;
    padding: 30px;

    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    border: 1px solid #e2e8f0;
}

.auth-card h2 {
    margin-bottom: 20px;

    font-size: 18px;
    text-align: center;
}

.auth-card input[type="text"], 
.auth-card input[type="password"] {
    width: 100%;
    margin-bottom: 8px;
    padding: 10px 12px;

    border: 1px solid #cbd5e1;
    border-radius: 6px;
    outline: none;
}

.auth-card input[type="text"]:focus, 
.auth-card input[type="password"]:focus {
    border-color: #3b82f6;
}

.auth-options {
    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;

    font-size: 12px;
    color: #64748b;
}
</style>
