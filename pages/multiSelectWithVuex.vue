<template>
  <div class="container">
    <MultiSelect
      :parentData="parentData"
      :fetchChildrenData="fetchChildrenData"
      :childrenData="childrenData"
    />
  </div>
</template>

<script>
import MultiSelect from '@/components/MultiSelect.vue'

import { mapState } from 'vuex';
export default {
  components: {
    MultiSelect
  },
  data() {
    return {
      isLoading: false,
    }
  },
  mounted() {
    this.$store.dispatch("fetchParentData");
  },
  computed: {
    ...mapState({
      parentData: state => state.parentData,
      childrenData: state => state.childrenData
    })
  },
  methods: {
    fetchChildrenData({ selectedParentId }) {
      this.$store.dispatch("fetchChildrenData", { selectedParentId });
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
