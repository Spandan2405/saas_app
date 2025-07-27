import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <SignIn />
    </main>
  );
}
