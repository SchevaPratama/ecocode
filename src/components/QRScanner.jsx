import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner({ onScanSuccess }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
        scanner.clear().catch((error) => console.error("Clear Error", error));
      },
      (error) => {
        // optionally log errors here
        // console.warn("QR scan error", error);
      },
    );

    return () => {
      scanner
        .clear()
        .catch((error) => console.error("Unmount Clear Error", error));
    };
  }, [onScanSuccess]);

  return <div id="qr-reader" style={{ width: "100%" }} />;
}
