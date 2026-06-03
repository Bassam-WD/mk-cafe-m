import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;