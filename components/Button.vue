<template>
  <button :class="`${classNameColor} button`" type="button" @click="handleClickButton">{{text}}</button>
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

.primary {
  background: #409eff;
}

.secondary {
  background: #2bb779;
}

</style>

<script>

export default {
  name: "Button",
  props: {
    text: String,
  },
  data() {
    return {
      buttonOn: true,
    }
  },
  computed: {
    classNameColor() {
      return this.buttonOn ? 'primary' : 'secondary';
    },
  },
  methods: {
    handleClickButton() {
      this.buttonOn = !this.buttonOn;
    }
  }
}
</script>
