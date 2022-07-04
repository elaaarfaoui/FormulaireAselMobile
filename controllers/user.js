const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.register = async (req, res) => {

    // res.send("Hello Point of Sale")

    const { name, lastName, DOB, gender, MF, pointSaleName, adress, gouvernerat, MSISDN, email } = req.body;
try {
    const PointVente = new User({ name, lastName, DOB,gender, MF,pointSaleName, adress, gouvernerat, MSISDN, email });

     //   check if the email exist
     const searchedUser = await User.findOne({ email });

     if (searchedUser) {
       return res.status(400).send({ msg: "Votre point de vente est déjà inscrit" });
     }

     // save the point of sale
    const newUserToken = await PointVente.save();
    // generate a token
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    // console.log("Point de vente", newUserToken)
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res.status(200).send({
      pointVente: newUserToken,
      msg: "Ce point de vente est enregistré avec succès",
      token: ` Bearer ${token}`,
    });
} catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Nous nous pouvons pas enregistrer le point de vente, veuillez réessayer plus tard"}); 
}
}