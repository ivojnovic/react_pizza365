/**
 * Proizvod.js
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
    naziv: {
      type: 'string',
      unique: true,
      required: true
    },
    vege: {
      type: 'boolean'
    },
    podvrsta:{
      model: 'Podvrsta'
    },
    cijena:{
      type: 'number'
    },
    proizvodac:{
      model: 'Proizvodac'
    },


  },

};

