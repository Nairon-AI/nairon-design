"use client";
import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function Unlock() {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!/^\d{6}$/.test(value)) return;
    if (value === "613902") {
      try {
        localStorage.setItem("cc_access", "1");
      } catch {}
      // Clean any ?code and go home without relying on middleware
      const url = new URL(window.location.href);
      url.pathname = "/";
      url.searchParams.delete("code");
      window.location.href = url.toString();
    }
  };

  return (
    <div style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 360, width: "100%", display: "grid", gap: 12 }}>
        <h1>Enter Access Code</h1>
        <InputOTP maxLength={6} value={value} onChange={setValue} inputMode="numeric" aria-label="6-digit access code">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <button onClick={submit} style={{ padding: 12 }}>Unlock</button>
      </div>
    </div>
  );
}


