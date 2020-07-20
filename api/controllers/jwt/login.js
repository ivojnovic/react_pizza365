module.exports = {


    friendlyName: 'Login',
  
  
    description: '',
  
  
    inputs: {
      email:{
        type: 'string',
        description: 'Email',
        required: true
      },
      password:{
        type: 'string',
        description: 'Password',
        required: true
      }
    },
  
  
    exits: {
      success: {
        description: 'All done'
      },
      invalid: {
        description: '',
      }
    },
  
  
    fn: async function (inputs, exits) {
  
      var user = await User.findOne({
        emailAddress: inputs.email,
      });
  
      let data = jwt.checkPassword(inputs.password, user.password)
      if(!data){throw 'invalid'}
  
      let token = jwt.sign({sub: user.id}, sails.config.session.secret)
      if(!token){throw 'invalid'}
  
      return exits.success({accessToken: token, email:user.emailAddress});
  
    }
  
  
  };
  