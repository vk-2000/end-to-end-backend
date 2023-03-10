const axios = require('axios');

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  try{
    const resopnse = await axios.post(`${process.env.AUTH_URL}/auth/token/validate` ,{}, {
      headers: {
        'Authorization': token
      }
    });
    req.userId = resopnse.data.id;
    next();
  }
  catch(err){
    res.status(401).send({msg: err.message});
  }

};

module.exports = authenticateUser;