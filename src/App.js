import "./App.css";
import Logo from "./Component/Atoms/Logo";
import logoUrl from "./Component/Image/Logo.png";

import Sidebar from "./Component/Organisms/Sidebar";

function App() {
  return (
    <aside className="h-full fixed top-0 left">
      <Logo url={logoUrl} />
      <Sidebar />
    </aside>
  );
}

export default App;
