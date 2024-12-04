<template>
  <nav class="header">
    <h1 class="name">
      <router-link to="/">Oradimi</router-link>
    </h1>
    <div class="header" v-if="$route.path !== '/'">
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
  </nav>
</template>

<script>
export default {
  name: "HeaderItem",
};
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
