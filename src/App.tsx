// App.tsx
import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/404Page";
import ThePreloader from "./layout/TheLoader/PLoader";
import AuraHero from "./assets/images/Aura-hero.gif";
import "./App.css";

const ASSETS_TO_PRELOAD = [AuraHero];

function App() {
  const [loading, setLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState<Record<string, string>>({});

  const handleComplete = useCallback((urls: Record<string, string>) => {
    setLoadedAssets(urls);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <ThePreloader assets={ASSETS_TO_PRELOAD} onComplete={handleComplete} />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home AuraHero={loadedAssets[AuraHero]} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
