import ParentConsent from "./pages/ParentConsent";
import NursePortal from "./components/nurse/NursePortal";

function App() {
  const isNursePortal = new URLSearchParams(window.location.search).get("portal") === "nurse";

  return isNursePortal ? <NursePortal /> : <ParentConsent />;
}

export default App;