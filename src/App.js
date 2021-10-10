import { GoogleAuthProvider,getAuth ,signInWithPopup} from "firebase/auth";
import './App.css';
import initilazieAuthentication from './firebase/firebase.int';

initilazieAuthentication()
const provider = new GoogleAuthProvider();


function App() {
  
  const auth = getAuth();
  const handalgooglesignin = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
  }
  return (
    <div className="App">
      

      <button onClick={handalgooglesignin}>google signin</button>
    </div>
  );
}

export default App;
