<template>
  <div :class="`app ${theme}`">
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return `${this.$store.state.preferences.theme}-theme`
    },
  },
}
</script>

<style lang="scss">
html {
  font-family: sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@mixin light-theme {
  --background-color: #fcfcfc;
  --text-color: #333;
}

@mixin dark-theme {
  --background-color: #212121;
  --text-color: #ddd;
}

.app {
  @include light-theme;

  background: var(--background-color);
  color: var(--text-color);

  &.dark-theme {
    @include dark-theme;
  }

  @media (prefers-color-scheme: dark) {
    @include dark-theme;

    &.light-theme {
      @include light-theme;
    }
  }
}
</style>
