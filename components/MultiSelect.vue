<template>
  <div class="wrap">
    <div class="selectArea">
      <select v-model="parentSeledted" @change="onChangeParentData">
        <option v-for="p in parentData" :value="p.id" :key="p.id">
          {{p.name}}
        </option>
      </select>
      <select v-model="childrenSeledted">
        <option v-for="c in childrenData" :value="c.id" :key="c.id">
          {{c.name}}
        </option>
      </select>
    </div>
    <p>{{childrenSeledted > 0 ? childrenData.find(child => child.id === childrenSeledted).text : ''}}</p>
  </div>
</template>

<style scoped>
.selectArea {
  display: flex;
  align-items: center;
}

select {
  width: 100px;
}

</style>

<script>

export default {
  name: "MultiSelect",
  props: {
    text: String,
    parentData: Array,
    childrenData: Array,
    fetchChildrenData: Function,
  },
  data() {
    return {
      parentSeledted: 0,
      childrenSeledted: 0,
    }
  },
  computed: {
    classNameColor() {
      return this.buttonOn ? 'primary' : 'secondary';
    },
  },
  methods: {
    onChangeParentData() {
      this.childrenSeledted = 0;
      this.fetchChildrenData({ selectedParentId: this.parentSeledted });
    }
  }
}
</script>
