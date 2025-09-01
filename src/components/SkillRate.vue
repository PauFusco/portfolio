<template>
  <div>
    <div class="skill-name">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SkillRate",
  props: {
    name: String
  },
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.clear {
  clear: both;
}

.skill-name {
  float: left;
  border: 1px solid #ccc;
  padding: 1px 10px;
  margin: 5px;
}

.circle {
  float: left;
  border-radius: 5px;
  height: 10px;
  width: 10px;
  border: 0px solid @skillRateCircleColor;
  background-color: transparent;
  opacity: 0.6;
  margin: 0px 2px;
}

.circle-full {
  background-color: @skillRateCircleColor;
}

.circle-empty {
  border-width: 1px;
  width: 8px;
  height: 8px;
}
</style>