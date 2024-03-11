<template>
<nav class="header">
    <h1 class="name">
        <router-link to="/">Oradimi</router-link>
    </h1>
    <div class="header">
        <h2 class="projects">
            <router-link to="/projects">{{ $t('dev') }}</router-link>
        </h2>
        <h2 class="about">
            <router-link to="/about">{{ $t('about') }}</router-link>
        </h2>
    </div>
</nav>
</template>

<script>
export default {
    name: 'HeaderItem'
}
</script>

<style scoped>
.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: keep-all;
    white-space: nowrap;
}

.header > * {
    padding: 0px 10px 0px 10px;
}
</style>