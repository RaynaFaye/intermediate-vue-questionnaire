<template>
  <div>
    <div class="second-textarea">
      <p>Final Thoughts?</p>
      <label for="second-textarea">Second Textarea</label>
      <textarea name="second-textarea" id="second-textarea" v-model="textareaTwo"></textarea>
    </div>
    <div class="submit-button">
      <input type="submit" value="Send" class="submit">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textareaTwo: ""
    };
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getThankYouPartQuestionnaire");
    }
  }
};
</script>

<style scoped>
.second-textarea {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
}
.submit {
  width: auto;
  height: auto;
  font-size: 20px;
  color: white;
  background: blue;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  border: none;
}
</style>
