import { useState } from "react";
import "./App.css";
import lens from "./assets/lens.png";

function App() {
  const [prompt, updatePrompt] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(undefined)

  // We want the input to be “submitted” at the moment the user presses the “Enter” key
  const sendPrompt = async(event) =>{
    if(event.key != "Enter"){
      return;
    }
    console.log('prompt', prompt);
  }
  return (
    <div className="app">
      <div className="app-container">
        <div className="spotlight__wrapper">
          <input
            type="text"
            placeholder="Ask me Anything ..."
            style={{ backgroundImage: `url(${lens})` }}
            className="spotlight__input"
            autoFocus
            onChange={(e)=> updatePrompt(e.target.value)}
            onKeyDown={(e)=>sendPrompt(e)}
          />
          <div className="spotlight__answer">
            <p>Kenya is a semi-arid country and has warm and sunny climate!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
