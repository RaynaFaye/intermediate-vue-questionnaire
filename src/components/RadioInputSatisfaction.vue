<template>
  <div>
    <slot></slot>
    <div class="radio-input">
      <div class="radio-input-section">
        <label :for="`${satisfactionType}-very-satisfied`">Très Satisfait</label>
        <input
          type="radio"
          :name="satisfactionType"
          value="very-satisfied"
          :id="`${satisfactionType}-very-satisfied`"
          v-model="satisfaction"
          @change="satisfactionChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${satisfactionType}-satisfied`">Satifait</label>
        <input
          type="radio"
          :name="satisfactionType"
          value="satisfied"
          :id="`${satisfactionType}-satisfied`"
          v-model="satisfaction"
          @change="satisfactionChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${satisfactionType}-quite-satisfied`">Assez Satisfait</label>
        <input
          type="radio"
          :name="satisfactionType"
          value="quite-satisfied"
          :id="`${satisfactionType}-quite-satisfied`"
          v-model="satisfaction"
          @change="satisfactionChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${satisfactionType}-rather-unhappy`">Plutôt Mécontent</label>
        <input
          type="radio"
          :name="satisfactionType"
          value="rather-unhappy"
          :id="`${satisfactionType}-rather-unhappy`"
          v-model="satisfaction"
          @change="satisfactionChosen"
        >
      </div>
      <div class="radio-input-section">
        <label :for="`${satisfactionType}-very-unhappy`">Très Mécontent</label>
        <input
          type="radio"
          :name="satisfactionType"
          value="very-unhappy"
          :id="`${satisfactionType}-very-unhappy`"
          v-model="satisfaction"
          @change="satisfactionChosen"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["satisfactionType"],
  data() {
    return {
      satisfaction: ""
    };
  },
  methods: {
    satisfactionChosen() {
      this.$emit("satisfactionChoice", this.satisfaction);
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
