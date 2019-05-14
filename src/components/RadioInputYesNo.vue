<template>
  <div>
    <slot></slot>
    <div class="radio-input">
      <div class="radio-input-section">
        <label :for="`${yesNoType}-yes`">Oui</label>
        <input
          type="radio"
          :name="yesNoType"
          value="yes"
          :id="`${yesNoType}-yes`"
          v-model="yesOrNo"
          @change="yesOrNoChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${yesNoType}-no`">Non</label>
        <input
          type="radio"
          :name="yesNoType"
          value="no"
          :id="`${yesNoType}-no`"
          v-model="yesOrNo"
          @change="yesOrNoChosen"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["yesNoType"],
  data() {
    return {
      yesOrNo: ""
    };
  },
  methods: {
    yesOrNoChosen() {
      this.$emit("yesOrNoChoice", this.yesOrNo);
    }
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
}
.radio-input {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
}
.radio-input-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>