<template>
  <div class="form-section">
    <h2>2. Location Du Véhicule</h2>
    <h3>Lors de la location du véhicule, avez-vous été satisfait du personnel du service location dans les domaine suivant?</h3>
    <app-radio-input-satisfaction satisfactionType="attente" @satisfactionChoice="attente = $event">
      <p>Attente au comptoir avant d'être servi:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="courtoisie"
      @satisfactionChoice="courtoisie = $event"
    >
      <p>Courtoisie:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="serviabilite"
      @satisfactionChoice="serviabilite = $event"
    >
      <p>Serviabilité:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="professionnalisme"
      @satisfactionChoice="professionnalisme = $event"
    >
      <p>Professionnalisme:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="rapidite"
      @satisfactionChoice="rapidite = $event"
    >
      <p>Rapidité de service au départ du véhicule:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="explication"
      @satisfactionChoice="explication = $event"
    >
      <p>Explication des tarifs et des conditions de location au comptoir:</p>
    </app-radio-input-satisfaction>
    <div class="continue">
      <button class="next-button" @click="goNextPart">Suivant</button>
    </div>
  </div>
</template>

<script>
import RadioInputSatisfaction from "./RadioInputSatisfaction.vue";
export default {
  data() {
    return {
      attente: "",
      courtoisie: "",
      serviabilite: "",
      professionnalisme: "",
      rapidite: "",
      explication: ""
    };
  },
  components: {
    appRadioInputSatisfaction: RadioInputSatisfaction
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getThirdPartQuestionnaire");
    }
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
}
.continue {
  align-self: end;
}
.next-button {
  font-size: 20px;
  color: black;
  background: #fb7219;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  border: none;
}
</style>
