const { check, validationResult } = require("express-validator");

// validation register
exports.registerRules = () => [
  check("name", "Merci d'entrer votre nom").notEmpty(),
  check("lastName", "Merci d'entrer votre prénom").notEmpty(),
  check("DOB", "Merci d'entre votre date de naissance").notEmpty().withMessage("Veuillez sélectionner votre date de naissance"),
  check("gender","Mercide préciser votre sexe : masculin / féminin"),
  // check("MF", "Merci de mentionner le matricule fiscale du point de vente").notEmpty(),
  check("pointSaleName", "Merci d'entrer le nom du point de vente").notEmpty(),
  check("adress", "Merci d'indiquer l'adresse du point de vente").notEmpty(),
  check("gouvernerat", "Merci d'indiquer le gouvernerat oû se trouve le point de vente").notEmpty(),
  check("MSISDN", "merci de saisir un numéro de téléphone valide").isNumeric().isLength({ min: 8, max:8}),
  check("email", "Merci de saisir un email valide").isEmail(),
  
];



exports.validation = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array().map((el) => ({
          msg: el.msg,
        })),
      });
    }
    next();
  };


  
  