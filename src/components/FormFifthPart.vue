<template>
  <div class="form-section">
    <h2>5. Quelques informations pour mieux vous connaitre</h2>
    <app-radio-input-yes-no yesNoType="haveRented" @yesOrNoChoice="dejaLoue = $event">
      <p>Avez-vous déjà loué un véhicule chez LECLERC?</p>
    </app-radio-input-yes-no>
    <app-radio-input-yes-no yesNoType="alreadyClient" @yesOrNoChoice="dejaClientAilleurs = $event">
      <p>Etes-vous client d'autres loueurs?</p>
    </app-radio-input-yes-no>
    <div>
      <p>Si oui, diriez-vous que la comparaison aves ces loueurs serait pour notre enseigne:</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="favorable">Favorable</label>
          <input
            type="radio"
            name="comparaison"
            value="favorable"
            id="favorable"
            v-model="comparaison"
          >
        </div>
        <div class="radio-input-section">
          <label for="egale">Egale</label>
          <input type="radio" name="comparaison" value="egale" id="egale" v-model="comparaison">
        </div>
        <div class="radio-input-section">
          <label for="defavorable">Défavorable</label>
          <input
            type="radio"
            name="comparaison"
            value="defavorable"
            id="defavorable"
            v-model="comparaison"
          >
        </div>
      </div>
    </div>
    <div>
      <p>Comment jugez-vous nos tarifs?</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="competitifs">Compétitifs</label>
          <input type="radio" name="tarifs" value="competitifs" id="competitifs" v-model="tarifs">
        </div>
        <div class="radio-input-section">
          <label for="corrects">Corrects</label>
          <input type="radio" name="tarifs" value="corrects" id="corrects" v-model="tarifs">
        </div>
        <div class="radio-input-section">
          <label for="eleves">Trop élevés</label>
          <input type="radio" name="tarifs" value="eleves" id="eleves" v-model="tarifs">
        </div>
      </div>
    </div>
    <div>
      <p>Vous louez à titre</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="particulier">Particulier</label>
          <input
            type="radio"
            name="typeClient"
            value="particulier"
            id="particulier"
            v-model="typeClient"
          >
        </div>
        <div class="radio-input-section">
          <label for="professionnel">Professionnel</label>
          <input
            type="radio"
            name="typeClient"
            value="professionnel"
            id="professionnel"
            v-model="typeClient"
          >
        </div>
      </div>
    </div>
    <div>
      <p>Par rapport à vos besoins, pensez-vous que la gamme des véhicules proposée est</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="adaptee">Adaptée</label>
          <input type="radio" name="adaptation" value="adaptee" id="adaptee" v-model="adaptation">
        </div>
        <div class="radio-input-section">
          <label for="inadaptee">Inadaptée</label>
          <input
            type="radio"
            name="adaptation"
            value="inadaptee"
            id="inadaptee"
            v-model="adaptation"
          >
        </div>
      </div>
    </div>
    <div>
      <p>Qu'est ce qui vous a décidé de louer un véhicule chez Leclerc?</p>
      <div class="radio-input">
        <div class="radio-input-section">
          <label for="prix">Le Prix</label>
          <input type="radio" name="choixLouer" value="prix" id="prix" v-model="choixLouer">
        </div>
        <div class="radio-input-section">
          <label for="service">Le Service</label>
          <input type="radio" name="choixLouer" value="service" id="service" v-model="choixLouer">
        </div>
        <div class="radio-input-section">
          <label for="autre">Autre</label>
          <input type="radio" name="choixLouer" value="autre" id="autre" v-model="choixLouer">
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
      dejaLoue: "",
      dejaClientAilleurs: "",
      comparaison: "",
      tarifs: "",
      typeClient: "",
      adaptation: "",
      choixLouer: ""
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
