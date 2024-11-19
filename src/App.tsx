import { Route, Routes } from "react-router-dom";
import Animation1 from "./pages/Animation1";
import Animation2 from "./pages/Animation2";
import Animation3 from "./pages/Animation3";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Animation1 />} />
        <Route path="/2" element={<Animation2 />} />
        <Route path="/3" element={<Animation3 />} />
      </Routes>
    </div>
  );
}
