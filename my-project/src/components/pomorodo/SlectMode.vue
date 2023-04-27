<template>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">seeting</a></li>
        </ul>
    </nav>
</template>

<style>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 110px;
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