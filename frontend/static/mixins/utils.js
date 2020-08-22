export default {
  methods: {
    /**
     * Format a date to french format (eg: dd/MM/yyyy)
     * @param {Date} date - date from other format than french (ex: yyyy-MM-dd)
     * @return {Date} date to french format
     */
    getDateToFrenchFormat: date => {
      if (date == null) {
        return 'Non renseigné'
      } else {
        let temp = new Date(date).toLocaleDateString('fr-FR')
        return temp
      }
    },

    /**
     * Remove all extra spaces from a string
     * @param {string} text - Text to treat
     * @return {string} The formated string
     */
    removeSpace: text => {
      console.log(text.replace(/\s+/g, ' '))
      return text.replace(/\s+/g, ' ').trim()
    }
  }
}
