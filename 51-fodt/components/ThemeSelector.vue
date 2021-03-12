<template>
  <label>
    Select theme:
    <select :value="value" @change="setTheme">
      <option value="default">Default</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  </label>
</template>

<script>
export default {
  computed: {
    value() {
      return this.$store.state.preferences.theme
    },
  },
  methods: {
    setTheme({ target }) {
      this.$store.dispatch('preferences/setTheme', target.value)
    },
  },
}
</script>
