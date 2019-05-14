<template>
  <div>
    <slot></slot>
    <p>(10 étant Très probablement, 0 Plutôt pas)</p>
    <div class="radio-input">
      <div class="radio-input-section">
        <label :for="`${numberType}-zero`">0</label>
        <input
          type="radio"
          :name="numberType"
          value="0"
          :id="`${numberType}-zero`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-one`">1</label>
        <input
          type="radio"
          :name="numberType"
          value="1"
          :id="`${numberType}-one`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-two`">2</label>
        <input
          type="radio"
          :name="numberType"
          value="2"
          :id="`${numberType}-two`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-three`">3</label>
        <input
          type="radio"
          :name="numberType"
          value="3"
          :id="`${numberType}-three`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-four`">4</label>
        <input
          type="radio"
          :name="numberType"
          value="4"
          :id="`${numberType}-four`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-five`">5</label>
        <input
          type="radio"
          :name="numberType"
          value="5"
          :id="`${numberType}-five`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-six`">6</label>
        <input
          type="radio"
          :name="numberType"
          value="6"
          :id="`${numberType}-six`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-seven`">7</label>
        <input
          type="radio"
          :name="numberType"
          value="7"
          :id="`${numberType}-seven`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-eight`">8</label>
        <input
          type="radio"
          :name="numberType"
          value="8"
          :id="`${numberType}-eight`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-nine`">9</label>
        <input
          type="radio"
          :name="numberType"
          value="9"
          :id="`${numberType}-nine`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${numberType}-ten`">10</label>
        <input
          type="radio"
          :name="numberType"
          value="10"
          :id="`${numberType}-ten`"
          v-model="recommendation"
          @change="numberChosen"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["numberType"],
  data() {
    return {
      recommendation: ""
    };
  },
  methods: {
    numberChosen() {
      this.$emit("numberChoice", this.recommendation);
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
  justify-content: space-between;
  margin-bottom: 25px;
}
.radio-input-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
