<template>
    <nav>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/setting">setting</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 15vh;
}

nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav li {
    margin-right: 20px;
}

nav li:last-child {
    margin-right: 0;
}

nav li a {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px;
}

nav li a:hover {
color: rgba(255, 255, 255, 0.58);
}
</style>
<script setup>
</script>