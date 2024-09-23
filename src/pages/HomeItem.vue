<template>
<div class="main">
    <i18n-t tag="h2" keypath="greeting.main">
        <b>{{ $t('greeting.t0') }}</b>
    </i18n-t>
</div>
</template>

<script>
export default {
    name: 'HomeItem',
}
</script>

<style scoped>
.main {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
}

a {
    text-decoration: underline;
}

h2 {
    font-size: 2.5em;
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