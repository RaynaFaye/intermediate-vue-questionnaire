<template>
  <div>
    <p>What value would you rate?</p>
    <div class="radio-input">
      <div>
        <label for="zero">0</label>
        <input type="radio" name="radio-input" value="0" id="zero" v-model="inputRadio">
      </div>
      <div>
        <label for="one">1</label>
        <input type="radio" name="radio-input" value="1" id="one" v-model="inputRadio">
      </div>
      <div>
        <label for="two">2</label>
        <input type="radio" name="radio-input" value="2" id="two" v-model="inputRadio">
      </div>
      <div>
        <label for="three">3</label>
        <input type="radio" name="radio-input" value="3" id="three" v-model="inputRadio">
      </div>
      <div>
        <label for="four">4</label>
        <input type="radio" name="radio-input" value="4" id="four" v-model="inputRadio">
      </div>
      <div>
        <label for="five">5</label>
        <input type="radio" name="radio-input" value="5" id="five" v-model="inputRadio">
      </div>
    </div>
    <div class="first-textarea">
      <label for="first-textarea">First Textarea</label>
      <textarea name="first-textarea" id="first-textarea" v-model="textareaOne"></textarea>
    </div>
    <div class="fourth-input">
      <label for="fourth-input">Fourth Input</label>
      <input type="text" name="fourth-input" id="fourth-input" v-model="inputFour">
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
      inputRadio: "",
      textareaOne: "",
      inputFour: ""
    };
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getThirdPartQuestionnaire");
    }
  }
};
</script>

<style scoped>
.radio-input {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
}
.fourth-input,
.first-textarea {
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
