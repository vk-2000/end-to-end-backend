const axios = require('axios');

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  // make axios post request to auth service and check if token is valid
  try{
    console.log(token);
    const resopnse = await axios.post(`${process.env.AUTH_URL}/auth/token/validate` ,{}, {
      headers: {
        'Authorization': token
      }
    });
    console.log(resopnse.data);
    req.userId = resopnse.data.id;
    next();
  }
  catch(err){
    // console.log(err);
    res.status(401).send({msg: err.message});
  }

};

module.exports = authenticateUser;