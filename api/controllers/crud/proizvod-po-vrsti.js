module.exports = {


    friendlyName: 'Proizvod po vrsti',
    description: '',
  
  
    inputs: {
      vrsta: {
        description: 'Ime vrste',
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
    const [variabla] = await Vrsta.find({name : inputs.vrsta});

    const proizvodi = await Proizvod.find().populate('podvrsta', {where: {vrsta: variabla.id}})
    console.log(proizvodi);
    return exits.success();
  
    }
  
  
  };
  