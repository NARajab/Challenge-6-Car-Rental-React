import "./ErrorMessage.css";
import Alert from "react-bootstrap/Alert";

export default function ErrorMessage({ message }) {
  return (
    <Alert variant="warning" className="text-center">
      {message}
    </Alert>
  );
}
