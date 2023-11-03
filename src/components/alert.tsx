import { ReactNode } from "react";

interface IAlert{
  alertMsg : ReactNode;
  onRemoveAlert : () => void;
}


const alert = ({alertMsg , onRemoveAlert} :IAlert) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Hey !</strong> {alertMsg}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
      onClick = {onRemoveAlert}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  );
};

export default alert;
