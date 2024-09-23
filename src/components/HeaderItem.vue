<template>
<nav class="header">
    <h1 class="name">
        <router-link to="/">Oradimi</router-link>
    </h1>
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

a {
    text-decoration: underline;
}

a.router-link-active,
a.router-link-exact-active {
  color: var(--color-link-selected);
  text-decoration: none;
}

a.router-link-active::before,
a.router-link-exact-active::before {
  content: "> ";
}
</style>