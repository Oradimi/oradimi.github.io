<template>
<div class="main">
    <h2>
        Hello, I'm a developer
    </h2>
    <p>
        C++ – OpenGL – Unity – Godot – Web
    </p>
    <h3>
        but I can do <b>a lot more</b>
    </h3>
    <p>
        Blender – Photoshop – Premiere Pro – Translation (FR-EN-JP)<br>...
    </p>
    <LinksItem/>
</div>
</template>

<script>
import LinksItem from "@/components/LinksItem.vue";
export default {
    name: 'HomeItem',
    components: {
        LinksItem
    }
}
</script>

<style scoped>
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