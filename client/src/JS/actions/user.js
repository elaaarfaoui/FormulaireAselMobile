import { LOAD_USER, REGISTER_USER } from "../const/user";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const registerUser = (pointVente, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/pointdevente/register", pointVente);
    //{pointVente,msg,token}
    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_USER, payload: result.data });
    history.push("/validation");
    console.log("result", result);
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.info(err.msg));
    }
    if (msg) {
      toast.info(msg);
    }
    // dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
