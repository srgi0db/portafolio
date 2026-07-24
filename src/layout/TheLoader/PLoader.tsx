// components/Preloader/Preloader.tsx
import { useEffect, useState } from "react";
import "./PLoader.css";

interface ThePreloader {
  assets: string[];
  onComplete: (loadedUrls: Record<string, string>) => void;
}

const Preloader = ({ assets, onComplete }: ThePreloader) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loadedUrls: Record<string, string> = {};
    const totalBytes: number[] = new Array(assets.length).fill(0);
    const loadedBytes: number[] = new Array(assets.length).fill(0);

    const updateProgress = () => {
      const total = totalBytes.reduce((a, b) => a + b, 0);
      const loaded = loadedBytes.reduce((a, b) => a + b, 0);
      if (total > 0) {
        setProgress(Math.min(100, Math.round((loaded / total) * 100)));
      }
    };

    const loadAsset = async (url: string, index: number) => {
      const res = await fetch(url);
      const contentLength = res.headers.get("Content-Length");
      totalBytes[index] = contentLength ? parseInt(contentLength, 10) : 0;

      if (!res.body) {
        const blob = await res.blob();
        loadedBytes[index] = blob.size;
        updateProgress();
        return { url, blob };
      }

      const reader = res.body.getReader();
      const chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loadedBytes[index] += value.length;
        updateProgress();
      }

      const blob = new Blob(chunks as BlobPart[]);
      return { url, blob };
    };

    (async () => {
      try {
        const results = await Promise.all(
          assets.map((url, i) => loadAsset(url, i)),
        );
        if (cancelled) return;

        results.forEach(({ url, blob }) => {
          loadedUrls[url] = URL.createObjectURL(blob);
        });

        setProgress(100);
        setTimeout(() => {
          if (!cancelled) onComplete(loadedUrls);
        }, 500);
      } catch (err) {
        console.error("Error precargando assets:", err);
        onComplete({});
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [assets, onComplete]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <span className="preloader-logo">
          Sergio<span>.</span>
        </span>

        <div className="preloader-bar-track">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="preloader-percent">{progress}%</span>
      </div>
    </div>
  );
};

export default Preloader;
