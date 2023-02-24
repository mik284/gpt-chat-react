import { useEffect, useState } from "react";
import "./App.css";
import lens from "./assets/lens.png";
import chatp from "./assets/chatme.jpeg"
import loadingGif from "./assets/spinner.gif";
import axios from "axios";
import veryfied from './assets/tick.png'

function App() {
  const [prompt, updatePrompt] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(undefined);

  // We want the input to be “submitted” at the moment the user presses the “Enter” key
  const sendPrompt = async (event) => {
    if (event.key != "Enter") {
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("https://chatbotapi-f6jd.onrender.com/ask", {
        prompt,
      });

      setAnswer(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (prompt != null && prompt.trim() === "") {
      setAnswer(undefined);
    }
    if (answer) {
      setLoading(false);
    }
  }, [prompt, answer]);

  return (
    <div className="app">
      <div className="app-container">
        <div className="img-chat">
          <img src={chatp} alt="chat me" className="chatme"/>
        </div>
      <h4>Find what you're looking for, faster than ever before!</h4>
      <main className="source">
        <img src={veryfied} alt="" width={20}/>
        <p>created by <a href="https://www.linkedin.com/in/michael-kamau-633790203/">Michael Kamau</a> </p></main>
        <div className="spotlight__wrapper">
          <input
            type="text"
            disabled={loading}
            placeholder="Ask me Anything ..."
            style={{
              backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
            }}
            className="spotlight__input"
            autoFocus
            onChange={(e) => updatePrompt(e.target.value)}
            onKeyDown={(e) => sendPrompt(e)}
          />
          <div className="spotlight__answer">{answer && <p>{answer}</p>}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
