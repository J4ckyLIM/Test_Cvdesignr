<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col">Sidebar 1</div>
        <div class="col-5">
          <div class="card mt-2 pointer" v-for="offer in allOffers" :key="offer.id" @click="showModal(offer)" data-toggle="modal" data-target="#offerModal">
            <div class="card-body">
              <h4 class="d-flex justify-content-start">{{ offer.company_name }}</h4>
              <h6 class="card-title d-flex justify-content-start">{{ offer.job_title }}</h6>
              <div class="row">
                <span class="ml-3 description">Contrat: {{ offer.contract_type }},</span>
                <i class="material-icons ml-3">location_on</i>
                <h6 class="card-subtitle mt-1 text-muted description">{{ offer.company_location }}</h6>
              </div>
              <p class="d-flex justify-content-start card-text date-string mt-2">Paru le: {{ getDateToFrenchFormat(offer.created_at) }}</p>
            </div>
          </div>
        </div>
        <div class="col">Sidebar 2</div>
      </div>
    </div>
    <OfferModal :offer="selectedOffer"/>
  </div>
</template>

<script>
import utils from '@/../static/mixins/utils.js'
import OfferModal from '@/components/modals/OfferModal.vue'

export default {
  name: 'Home',
  mixins: [utils],
  components: {
    OfferModal
  },

  created () {
    this.getAllOffers()
  },
  computed: {
    allOffers: function () {
      return this.$store.state.offers
    }
  },
  data () {
    return {
      msg: 'Welcome to Home',
      selectedOffer: null
    }
  },

  methods: {
    getAllOffers () {
      this.$store.dispatch('getAllOffers')
    },

    showModal (offer) {
      // Reset data before assigning it again
      this.selectedOffer = null
      this.selectedOffer = offer
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.pointer {
  cursor: pointer;
}

.date-string {
  font-size: 0.75em;
}

.description {
  font-size: 1em;
}
</style>
