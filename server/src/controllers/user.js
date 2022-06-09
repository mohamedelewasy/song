const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const userModel = require('../models/user');

dotenv.config();
exports.postRegister = async (req, res)=>{
  const {email, password} = req.body;
  const hashed = await hashPassword(password);
  const user = await userModel.build({email: email,password: hashed});
  const accessToken = jwt.sign(
    {userId: user.pk},
    // eslint-disable-next-line no-undef
    process.env.JWT_SECRET,
    {expiresIn: '1d'},
  );
  user.accessToken = accessToken;
  user.save()
  .then(()=>
    res.send([{
      message: `user created successfully with email: ${req.body.email}.`,
    }])
  )
  .catch(()=>{
    return res.status(400).send('');
  });
};

exports.login = async (req, res) => {
   const { email, password } = req.body;
   const user = await userModel.findOne({where: {email: email} });
   if (!user) return res.status(400).send('there is no account with this email!');
   const validPassword = await validatePassword(password, user.password);
   if (!validPassword) return res.status(400).send('wrong password!');
   // eslint-disable-next-line no-undef
   const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
   });
   await user.update({ accessToken });
   return res.status(200).send({
     user: {
       id: user.id,
       email: user.email,
       token: user.accessToken,
     }  
   });
 }

// eslint-disable-next-line no-undef
async function hashPassword(password){return await bcrypt.hash(password, parseInt(process.env.SALT_ROUND))}

async function validatePassword(password, hashed){return await bcrypt.compare(password, hashed)}