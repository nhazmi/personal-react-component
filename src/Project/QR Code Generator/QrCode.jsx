import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [Qr, setQr] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <QRCode value={Qr} size={200}></QRCode>
      <br />
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        style={{ textAlign: "center" }}
        type="text"
        placeholder="Enter"
        value={inputValue}
        onKeyDown={function (e) {
          if (e.key === "Enter") {
            setQr(inputValue);
            setInputValue("");
          }
        }}
      />
      <br />
      <button
        onClick={function () {
          setQr(inputValue);
          setInputValue("");
        }}
        style={{ marginTop: "0.5em" }}
      >
        Generate
      </button>
    </div>
  );
}
