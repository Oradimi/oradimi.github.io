<template>
<div class="main">
    <h2>
        I want to <b>create</b>
    </h2>
    <p>
        All-rounder in fields related to video games,<br>
        I'm doing my best to become better at each of them.
    </p>
    <nav class="external">
        <a href="/resume.pdf" target="_blank">resume</a>
        <a href="https://github.com/Oradimi" target="_blank">github</a>
        <a href="https://twitter.com/Oradimi" target="_blank">twitter</a>
        <a href="https://www.youtube.com/@Oradimi" target="_blank">youtube</a>
        <a href="https://www.linkedin.com/in/logan-argouse-8779422aa/" target="_blank">linkedin</a>
    </nav>
</div>
</template>

<script>
export default {
    name: 'AboutItem',
}
</script>

<style scoped>
.external {
    margin: 2rem;
}

.external > * {
    color: #fff;
    background-color: #a92a2a;
    border-radius: 20px 20px;
    padding: 10px;
    margin: 1rem;
}

.external > *:hover {
    color: #fff;
    background-color: #7f2828;
    border-radius: 10px 10px;
}

.main {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h2 {
    font-size: 48px;
    font-weight: normal;
}

b {
    background-image: linear-gradient(
        -225deg,
        #fff800 0%,
        #20ade0 29%,
        #cd5c5c 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}
</style>