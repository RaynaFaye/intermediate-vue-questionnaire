<template>
  <div id="app">
    <div id="nav">
      <!-- currently left just for easy acces atm -->
      <router-link to="/">Home</router-link>|
      <router-link to="/questionnaire">Questionnaire</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.form-section {
  display: flex;
  flex-direction: column;
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
/* Not used but kept in case of futur need atm */
.first-input,
.second-input,
.third-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
}
</style>