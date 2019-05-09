<template>
  <div class="home">
    <h1>This is the Homepage</h1>
    <p>Thank you for taking the time to take this questionnaire.</p>
    <p>You will have a set of three questions to fill out.</p>
    <p>To start the questionaire:</p>
    <router-link to="/questionnaire" class="questionnaire-button">Click Here</router-link>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.questionnaire-button {
  text-decoration: none;
  color: white;
  background: blue;
  padding: 10px;
  border-radius: 5px;
}
</style>