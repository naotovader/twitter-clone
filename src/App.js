import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hey Clever Programmers... Let's build a Twitter Clone 🚀</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
