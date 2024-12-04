<template>
  <div class="main">
    <div class="header">
      <h2 class="art">
        <router-link to="/art">{{ $t("art") }}</router-link>
      </h2>
      <h2 class="comics">
        <router-link to="/comics">{{ $t("comics") }}</router-link>
      </h2>
      <h2 class="fanart">
        <router-link to="/fanart">{{ $t("fanart") }}</router-link>
      </h2>
      <h2 class="games">
        <a class="link-container" href="https://oradimi.itch.io/" target="_blank">{{ $t("games") }}</a>
      </h2>
      <h2 class="kancolle">
        <a class="link-container" href="https://docs.google.com/document/d/1S3-Uv9wbuv2lAkjc_5oH6T069rb7QlTP90W2AHoNPzg" target="_blank">{{ $t("kancolle") }}</a>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeItem",
};
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
  background-image: linear-gradient(-225deg, #fff800 0%, #20ade0 29%, #cd5c5c 67%, #fff800 100%);
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
