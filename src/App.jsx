import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="spotlight__wrapper">
          <input
            type="text"
            placeholder="Ask me Anything ..."
            style={{ backgroundImage: `url(${lens})` }}
            className="spotlight__input"
          />
          <div className="spotlight__answer">
            Kenya is a semi-arid country and has warm and sunny climate!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
