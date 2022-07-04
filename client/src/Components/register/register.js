import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../JS/actions/user";
import "./register.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [MF, setMF] = useState("");
  const [pointSaleName, setPointSaleName] = useState("");
  const [adress, setAdress] = useState("");
  const [gouvernerat, setGouvernerat] = useState("");
  const [MSISDN, setMSISDN] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  return (
    <div className="global">
      <div className="title">
        <h4> Asel Mobile عندك نقطة بيع و تحب تولي مع</h4>
        <div className="line2">
          <h4>.سجل معطياتك باش فريقنا التجاري يتصل بيك</h4>
        </div>
      </div>

      <div classname="logoAsel">
        <img src="logoAsel.png" />
      </div>

      <div className="formulaire">
        <div className="nameStyle">
          <div className="group">
            {" "}
            <input
              id="user"
              type="name"
              className="input"
              placeholder="   Nom"
              onChange={(e) => setName(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className="group">
          {" "}
          <input
            id="user"
            type="name"
            className="input"
            placeholder="   Prénom"
            onChange={(e) => setLastName(e.target.value)}
          />{" "}
        </div>
        {/* <div className="group"> <input id="date" type="date" className="input" placeholder="   Date de naissance"  onChange={(e) => setDOB(e.target.value)}/> </div> */}

        <div>
          <div className="group">
            {" "}
            <span
              className="infobulle"
              id="user"
              aria-label="Date de naissance"
            >
              {" "}
              <input
                id="date"
                type="date"
                className="input"
                placeholder="   Date de naissance"
                onChange={(e) => setDOB(e.target.value)}
              />{" "}
            </span>
          </div>
        </div>

        {/* <div className="group"> <input id="user" type="name" className="input" placeholder="   Sexe"  /> </div> */}
        <div className="group">
          {" "}
          <select  id="user"
            type="name"
            className="input"
            onChange={(e) => setGender(e.target.value)}>
          <option value="" disabled selected>Sex</option>
          <option >Masculin</option>
          <option >Féminin</option>
          </select>
          
        </div>

        <div className="group">
          {" "}
          <input
            id="user"
            type="name"
            className="input"
            placeholder="   Matricule Fiscale"
            onChange={(e) => setMF(e.target.value)}
          />{" "}
        </div>
        <div className="group">
          {" "}
          <input
            id="user"
            type="name"
            className="input"
            placeholder="   Nom point de vente"
            onChange={(e) => setPointSaleName(e.target.value)}
          />{" "}
        </div>
        <div className="group">
          {" "}
          <input
            id="user"
            type="name"
            className="input"
            placeholder="   Adresse"
            onChange={(e) => setAdress(e.target.value)}
          />{" "}
        </div>

        <div className="group">
          {" "}
          <select  id="user"
            type="name"
            className="input"
            onChange={(e) => setGouvernerat(e.target.value)}>
          <option value="" disabled selected>Gouvernorat</option>
          <option >Ariana</option>
          <option >Béja</option>
          <option >Ben Arous</option>
          <option >Bizerte</option>
          <option >Gabès</option>
          <option >Gafsa</option>
          <option >Jendouba</option>
          <option >Kairouan</option>
          <option >Kasserine</option>
          <option >Kébili</option>
          <option >Le Kef </option>
          <option >Mahdia</option>
          <option >La Manouba </option>
          <option >Médenine</option>
          <option >Monastir</option>
          <option >Nabeul</option>
          <option >Sfax</option>
          <option >Sidi Bouzid</option>
          <option >Siliana</option>
          <option >Sousse</option>
          <option >Tataouine</option>
          <option >Tozeur</option>
          <option >Tunis</option>
          <option >Zaghouan</option>
          </select>
        </div>

        <div className="group">
          {" "}
          <input
            id="user"
            type="name"
            className="input"
            placeholder="   Numéro téléphone"
            onChange={(e) => setMSISDN(e.target.value)}
          />{" "}
        </div>
        <div className="group">
          {" "}
          <input
            id="userEmail"
            type="name"
            className="input"
            placeholder="   Adresse email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>
      </div>
      <input
        className="validate"
        type="button"
        defaultValue="Valider"
        onClick={() =>
          dispatch(
            registerUser(
              {
                name,
                lastName,
                DOB,
                gender,
                pointSaleName,
                adress,
                gouvernerat,
                MSISDN,
                email,
              },
              history
            )
          )
        }
      />
      <footer>
        <h5>
          ©2022 Asel Mobile se réserve le droit de modifier totalement ou
          partiellement les informations sus-indiqués
        </h5>
      </footer>
    </div>
  );
};

export default Register;
