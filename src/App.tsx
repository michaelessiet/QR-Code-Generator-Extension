import { createSignal, type Component, createEffect } from "solid-js";
import QRcode from "qrcode";

const App: Component = () => {
  const [qrData, setQRData] = createSignal("");
  let canvasRef: HTMLCanvasElement;
  let inputRef: HTMLInputElement;

  async function setter(v) {
    setQRData(v.currentTarget.value);
    QRcode.toCanvas(canvasRef, v.currentTarget.value, (error) =>
      console.error(error),
    );
  }

  return (
    <div class="flex flex-col items-center justify-center h-[400px] min-w-[300px]">
      <h1 class="font-bold text-3xl">QR Code Generator</h1>
      <input
        class="outline-black outline rounded p-2"
        placeholder="Input text to encode..."
        value={qrData()}
        ref={inputRef}
        onkeyup={setter}
      />
      <canvas
        class="outline outline-black m-4 rounded w-0 h-0"
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default App;
