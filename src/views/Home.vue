<template>
  <div class="home">
    <h1>Titre du questionnaire</h1>
    <p>Notre préoccupation constante est de vous offrir le service que vous attendez.</p>
    <p>Ce questionnaire nous aidera à améliorer notre prestation afin de vous garantir le meilleur niveau de qualité</p>
    <p>Pour commencer le questionnaire</p>
    <router-link to="/questionnaire" class="questionnaire-button">Cliquez ici</router-link>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.questionnaire-button {
  width: 10%;
  text-decoration: none;
  text-align: center;
  color: black;
  background: #fb7219;
  padding: 10px;
  margin-top: 25px;
  border-radius: 5px;
  align-self: center;
}
@media all and (max-width: 500px) {
  .questionnaire-button {
    width: 35%;
  }
}
</style>