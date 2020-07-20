module.exports = {


    friendlyName: 'Proizvod po proizvodacu',
  
  
    description: '',
  
  
    inputs: {
      proizvodac: {
        description: 'Ime proizvodaca',
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
      const [proiz] = await Proizvodac.find({ime: inputs.proizvodac});
      console.log(proiz.id);
      const proizvodi = await Proizvod.find({proizvodac: proiz.id});
      return exits.success(proizvodi);
    }
  
  
  };
  