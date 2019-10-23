<template>
  <div class="container">
    <Button text="Basic Button" />
    <LoadingButton text="Loading Button" :isLoading="isLoading" :handle-click-button="handleClickLoadingButton" />
    <LoadingButtonWithMessage
      text="Loading Button with Message"
      :isLoading="isLoadingMessage"
      :message="message"
      :handle-click-button="handleClickFetchMessageButton"
    />
    <MultiSelect />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import LoadingButton from '@/components/LoadingButton.vue'
import LoadingButtonWithMessage from '@/components/LoadingButtonWithMessage.vue'
import MultiSelect from '@/components/MultiSelect.vue'

import { mapState } from 'vuex';
export default {
  components: {
    Button,
    LoadingButton,
    LoadingButtonWithMessage,
    MultiSelect
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    ...mapState({
      isLoadingMessage: state => state.isLoading,
      message: state => state.message,
    })
  },
  methods: {
    handleClickLoadingButton() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    handleClickFetchMessageButton() {
      this.$store.dispatch("setMessage", { message: "message" });
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>

