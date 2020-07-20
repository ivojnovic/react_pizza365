/**
 * Proizvodac.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true
    },
    ime: {
      type: 'string',
      unique: true,
      required: true
    },
    tip: {
      type: 'string',
      required: true,
      isIn: ['d.o.o.', 'd.d.', 'obrt', 'opg']
    },
    adresa: {
      type: 'string'
    },
    drzava: {
      type: 'string',
      required: true
    },
    telefon: {
      type: 'string'
    },
    proizvodi: {
      collection: 'Proizvod',
      via: 'proizvodac'
    },
    user:{
      model:'user'
  }
  },

};

