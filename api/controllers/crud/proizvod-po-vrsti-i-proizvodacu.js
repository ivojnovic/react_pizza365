module.exports = {


    friendlyName: 'Proizvod po vrsti i proizvodacu',
    description: '',
  
  
    inputs: {
      vrsta: {
        description: 'Ime vrste',
        type: 'string',
        required: true
      },
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
    const proizvodi = await Proizvodi.find().populate(proizvodac, 
        {where: {Ime : inputs.proizvodac}}).populate('podvrsta').populate('vrsta',
        {where: {ime: inputs.vrsta}});
    console.log(proizvodi);
    return exits.success();
  
    }
  
  
  };
  