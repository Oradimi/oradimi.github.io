<template>
<ul class="header">
    <li class="name">
        <h1><router-link to="/">Oradimi</router-link></h1>
    </li>
    <li class="projects">
        <h2><router-link to="/projects">{{ $t('dev') }}</router-link></h2>
    </li>
    <li class="about">
        <h2><router-link to="/about">{{ $t('about') }}</router-link></h2>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.header > * {
    padding: 0px 10px 0px 10px;
}

@media (min-width: 450px) {
    .header {
        flex-direction: row;
    }
}
</style>