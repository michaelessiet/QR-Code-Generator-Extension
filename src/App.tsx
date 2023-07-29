import { createSignal, type Component } from "solid-js";
import QRcode from "qrcode";

const App: Component = () => {
  const [qrDataUrl, setQRDataUrl] = createSignal("");
  let canvasRef: HTMLCanvasElement;
  let inputRef: HTMLInputElement;

  async function setter(v) {
    QRcode.toCanvas(canvasRef, v.currentTarget.value);
    setQRDataUrl(await QRcode.toDataURL(v.currentTarget.value));
  }

  return (
    <div class="flex flex-col items-center justify-center h-[400px] min-w-[300px]">
      <h1 class="font-bold text-3xl">QR Code Generator</h1>
      <input
        class="outline-black outline rounded p-2"
        placeholder="Input text to encode..."
        ref={inputRef}
        onkeyup={setter}
      />
      <canvas
        class="outline outline-black m-4 rounded w-0 h-0"
        ref={canvasRef}
      ></canvas>
      <a href={qrDataUrl()} download="qrcode.png">
        Download
      </a>
    </div>
  );
};

export default App;
