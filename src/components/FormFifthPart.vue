<template>
  <div class="form-section">
    <h2>5. Quelques informations pour mieux vous connaitre</h2>
    <app-radio-input-yes-no yesNoType="hasRented" @yesOrNoChoice="hasRented = $event">
      <p>Avez-vous déjà loué un véhicule chez LECLERC?</p>
    </app-radio-input-yes-no>
    <app-radio-input-yes-no yesNoType="alreadyClient" @yesOrNoChoice="alreadyClient = $event">
      <p>Etes-vous client d'autres loueurs?</p>
    </app-radio-input-yes-no>
    <div>
      <p>Si oui, diriez-vous que la comparaison aves ces loueurs serait pour notre enseigne:</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="favorable">Favorable</label>
          <input
            type="radio"
            name="comparison"
            value="favorable"
            id="favorable"
            v-model="comparison"
          >
        </div>
        <div class="radio-input-section">
          <label for="egale">Egale</label>
          <input type="radio" name="comparison" value="egale" id="egale" v-model="comparison">
        </div>
        <div class="radio-input-section">
          <label for="defavorable">Défavorable</label>
          <input
            type="radio"
            name="comparison"
            value="defavorable"
            id="defavorable"
            v-model="comparison"
          >
        </div>
      </div>
    </div>
    <div>
      <p>Comment jugez-vous nos tarifs?</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="competitive">Compétitifs</label>
          <input type="radio" name="prices" value="competitive" id="competitive" v-model="prices">
        </div>
        <div class="radio-input-section">
          <label for="correct">Corrects</label>
          <input type="radio" name="prices" value="correct" id="correct" v-model="prices">
        </div>
        <div class="radio-input-section">
          <label for="high">Trop élevés</label>
          <input type="radio" name="prices" value="high" id="high" v-model="prices">
        </div>
      </div>
    </div>
    <div>
      <p>Vous louez à titre</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="individual">Particulier</label>
          <input
            type="radio"
            name="typeClient"
            value="individual"
            id="individual"
            v-model="typeClient"
          >
        </div>
        <div class="radio-input-section">
          <label for="professional">Professionnel</label>
          <input
            type="radio"
            name="typeClient"
            value="professional"
            id="professional"
            v-model="typeClient"
          >
        </div>
      </div>
    </div>
    <div>
      <p>Par rapport à vos besoins, pensez-vous que la gamme des véhicules proposée est</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="adapted">Adaptée</label>
          <input type="radio" name="adaptation" value="adapted" id="adapted" v-model="adaptation">
        </div>
        <div class="radio-input-section">
          <label for="unsuitable">Inadaptée</label>
          <input
            type="radio"
            name="adaptation"
            value="unsuitable"
            id="unsuitable"
            v-model="adaptation"
          >
        </div>
      </div>
    </div>
    <div>
      <p>Qu'est ce qui vous a décidé de louer un véhicule chez Leclerc?</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="price">Le Prix</label>
          <input type="radio" name="choiceRent" value="price" id="price" v-model="choiceRent">
        </div>
        <div class="radio-input-section">
          <label for="service">Le Service</label>
          <input type="radio" name="choiceRent" value="service" id="service" v-model="choiceRent">
        </div>
        <div class="radio-input-section">
          <label for="other">Autre</label>
          <input type="radio" name="choiceRent" value="other" id="other" v-model="choiceRent">
        </div>
      </div>
    </div>
    <div class="submit-button">
      <input type="submit" value="Envoyer" class="submit">
    </div>
  </div>
</template>

<script>
import RadioInputYesNo from "./RadioInputYesNo.vue";
export default {
  data() {
    return {
      hasRented: "",
      alreadyClient: "",
      comparison: "",
      prices: "",
      typeClient: "",
      adaptation: "",
      choiceRent: ""
    };
  },
  components: {
    appRadioInputYesNo: RadioInputYesNo
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
}
.radio-input {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
}
.radio-input-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submit-button {
  align-self: end;
}
.submit {
  width: auto;
  height: auto;
  font-size: 20px;
  color: black;
  background: #fb7219;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  border: none;
}
</style>
