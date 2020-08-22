<template>
  <div class="modal" id="offerModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Description du poste</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row ml-2">
            <h6 class="card-title d-flex justify-content-start title">{{ offer.job_title }}</h6>
          </div>
          <div class="row ml-2">
            <h6 class="card-title d-flex justify-content-start title">{{ offer.company_name }} - {{ offer.company_location }}</h6>
          </div>
          <div class="row ml-2">
            <h6 class="card-title d-flex justify-content-start simple-text">{{ offer.salary }} €/mois, {{ offer.contract_type }}</h6>
          </div>
          <div class="row ml-2">
            <h6 class="card-title d-flex justify-content-start">Missions:</h6>
          </div>
          <div class="row ml-2 mr-2">
            <span class="card-title d-flex justify-content-start description simple-text">{{ removeSpace(offer.description) }}</span>
          </div>
          <div class="row ml-2 mt-4">
            <span class="card-title d-flex justify-content-start date-string">Posté le: {{ getDateToFrenchFormat(offer.created_at) }}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="fakeAlert(offer.company_name)">Postuler</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/../static/mixins/utils.js'

export default {
  name: 'OfferModal',
  props: {
    offer: Object
  },
  mixins: [utils],

  methods: {
    /**
     * Redirect the user to the route given
     * @param {string} routeName - Name of the route to redirect to
     */
    fakeAlert (companyName) {
      alert('Vous venez de postuler chez ' + companyName)
    }
  }
}
</script>

<style>
.date-string {
  font-size: 0.65em
}

.simple-text {
  font-size: 0.85em;
}

.description {
  word-break: break-word;
}

.title {
  font-weight: bold
}
</style>
