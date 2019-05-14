<template>
  <div class="questionnaire">
    <h1>Titre du questionnaire</h1>
    <form @submit.prevent="onSubmit">
      <component :is="whatComponent()"></component>
    </form>
  </div>
</template>

<script>
export default {
  name: "questionnaire",
  data() {
    return {
      componentLoaded: ""
    };
  },
  methods: {
    whatComponent() {
      return (this.componentLoaded = this.$store.state.componentLoaded);
    },
    onSubmit() {
      this.$store.dispatch("getThankYouPartQuestionnaire");
    }
  }
};
</script>

<style>
.questionnaire {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 75%;
}
textarea {
  width: 50%;
  height: 100px;
}
input {
  width: 50%;
  height: 33px;
}
</style>
