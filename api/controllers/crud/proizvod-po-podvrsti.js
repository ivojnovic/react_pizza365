module.exports = {


  friendlyName: 'Proizvod po podvrsti',


  description: '',


  inputs: {
    podvrsta: {
      description: 'Ime podvrste',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
    },
    notFound: {
      description: 'Nije pronađen ni jedan proizvod',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
    const [podvrsta] = await Podvrsta.find({name:inputs.podvrsta})
    console.log(podvrsta)
    const proizvodi = await Proizvod.find({podvrsta: podvrsta.id})
    // All done.
    return exits.success(proizvodi);

  }


};
