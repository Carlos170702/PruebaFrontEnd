import { insertClient } from "../../helpers/InsertClient";
import { getClients } from "../../helpers/loadNotes";
import { isSaving, setClients, setMessage, setNewClient } from "./clientSlice";

export const startLoadingNotes = () => {
  return async (dispatch) => {
    dispatch(isSaving());
    const res = await getClients();
    dispatch(setClients(res));
  };
};

export const startInsertClient = (data) => {
  return async (dispatch) => {
    dispatch(isSaving());
    const res = await insertClient(data);
    const { status, employe } = res;
    if (status === false) {
      dispatch(setMessage({ msg: res.error[0].msg, status }));

      setTimeout(() => {
        dispatch(setMessage(null));
      }, 2000);
    }

    if (status) {
      dispatch(setNewClient({ employe, msg: "Cliente grardado", status }));

      setTimeout(() => {
        dispatch(setMessage(null));
      }, 2000);
    }
  };
};
