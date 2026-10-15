import "./App.css";
import { auth } from "./firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(
      auth,
      "edwardtest2026101@example.com",
      "testing432",
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
    </div>
  );
}
export default App;
