<template>
<nav class="links">
    <a href="/resume.pdf" target="_blank">
        <img src="../assets/logos/resume.svg" alt="resume"/>
    </a>
    <a href="https://github.com/Oradimi" target="_blank">
        <img src="../assets/logos/github.svg" alt="github"/>
    </a>
    <a href="https://twitter.com/Oradimi" target="_blank">
        <img src="../assets/logos/twitter.svg" alt="twitter"/>
    </a>
    <a href="https://www.youtube.com/@Oradimi" target="_blank">
        <img src="../assets/logos/youtube.svg" alt="youtube"/>
    </a>
    <a href="https://www.linkedin.com/in/logan-argouse-8779422aa/" target="_blank">
        <img src="../assets/logos/linkedin.svg" alt="linkedin"/>
    </a>
</nav>
</template>

<script>
export default {
    name: 'LinksItem'
}
</script>

<style scoped>
img {
    filter: invert(100%) sepia(0%) saturate(2766%) hue-rotate(307deg) brightness(113%) contrast(100%);
    width: 30px;
    height: 30px;
    justify-self: center;
    align-self: center;
}

.links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0rem;
}

.links > * {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    color: #fff;
    background-color: #a92a2a;
    border-radius: 50%;
    padding: 0px;
    margin: 1rem;
}

.links > *:hover {
    background-color: #531a1a;
}
</style>