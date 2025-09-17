"use client";
import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function Unlock() {
  const [value, setValue] = useState("");

  const submit = () => {
    if (value.length !== 6) return;
    const url = new URL(window.location.href);
    url.pathname = "/";
    url.searchParams.set("code", value);
    window.location.href = url.toString();
  };

  return (
    <div style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 360, width: "100%", display: "grid", gap: 12 }}>
        <h1>Enter Access Code</h1>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
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


