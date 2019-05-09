<template>
  <div>
    <div class="fifth-input">
      <label for="fifth-input">Fifth Input</label>
      <input type="text" name="fifth-input" id="fifth-input" v-model="inputFive">
    </div>
    <div class="sixth-input">
      <label for="sixth-input">Sixth Input</label>
      <input type="text" name="sixth-input" id="sixth-input" v-model="inputSix">
    </div>
    <div class="seventh-input">
      <label for="seventh-input">Seventh Input</label>
      <input type="text" name="seventh-input" id="seventh-input" v-model="inputSeven">
    </div>
    <div class="continue">
      <button class="next-button" @click="goNextPart">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFive: "",
      inputSix: "",
      inputSeven: ""
    };
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getFourthPartQuestionnaire");
    }
  }
};
</script>

<style scoped>
.fifth-input,
.sixth-input,
.seventh-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
}
.next-button {
  font-size: 20px;
  color: white;
  background: blue;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  border: none;
}
</style>
