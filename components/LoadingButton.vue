<template>
  <button :class="`${classNameColor} button`" type="button" @click="handleClickButton">
    {{isLoading ? 'Loading...' : text}}
  </button>
</template>

<style scoped>
.button {
  appearance: none;
  width: 200px;
  padding: 10px;
  text-align: center;
  background: #409eff;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background .5s ease;
}

.loading {
  background: #d5dae0;
}

.primary {
  background: #409eff;
}

</style>

<script>

export default {
  name: "LoadingButton",
  props: {
    text: String,
    isLoading: {
      type: Boolean,
      default: false,
    },
    handleClickButton: {
      type: Function,
      default: () => {}
    },
  },
  computed: {
    classNameColor() {
      return this.isLoading ? 'loading' : 'primary';
    },
  },
}
</script>
