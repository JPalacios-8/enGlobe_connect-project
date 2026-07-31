import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LaunchManagement from "./pages/LaunchManagement";
import Calendar from "./pages/Calendar";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/launches" replace />}
        />

        <Route
          path="/launches"
          element={<LaunchManagement />}
        />

        <Route
          path="/calendar"
          element={<Calendar />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;