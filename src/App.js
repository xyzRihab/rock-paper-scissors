import { ScoreProvider } from "./ScoreContext";
import Router from "./routes/Router";
import "./style/output.css";

function App() {
  return (
    <ScoreProvider>
      <Router />
    </ScoreProvider>
  );
}

export default App;
