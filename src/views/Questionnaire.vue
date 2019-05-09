<template>
  <div class="questionnaire">
    <h1>This is the questionnaire page</h1>
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
form {
  height: 250px;
  width: 50%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
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
