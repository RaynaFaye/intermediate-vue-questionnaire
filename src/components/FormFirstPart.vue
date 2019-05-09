<template>
  <div>
    <div class="first-input">
      <label for="first-input">First Input</label>
      <input type="text" name="first-input" id="first-input" v-model="inputOne">
    </div>
    <div class="second-input">
      <label for="second-input">Second Input</label>
      <input type="text" name="second-input" id="second-input" v-model="inputTwo">
    </div>
    <div class="third-input">
      <label for="third-input">Third Input</label>
      <input type="text" name="third-input" id="third-input" v-model="inputThree">
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
      inputOne: "",
      inputTwo: "",
      inputThree: ""
    };
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getSecondPartQuestionnaire");
    }
  }
};
</script>

<style scoped>
.first-input,
.second-input,
.third-input {
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
