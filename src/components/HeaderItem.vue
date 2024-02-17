<template>
<ul class="header">
    <li class="name">
        <h1><router-link to="/">Oradimi</router-link></h1>
    </li>
    <li class="projects">
        <h2><router-link to="/projects">Projects</router-link></h2>
    </li>
    <li class="gallery">
        <h2><router-link to="/gallery">Gallery</router-link></h2>
    </li>
    <li class="about">
        <h2><router-link to="/about">About</router-link></h2>
    </li>
</ul>
</template>

<script>
export default {
    name: 'HeaderItem'
}
</script>

<style scoped>
.header {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.header > * {
    padding: 0px 10px 0px 10px;
}

@media (min-width: 600px) {
    .header {
        display: flex;
    }
}
</style>