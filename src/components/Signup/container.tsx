/** @format */
"use client";

import { SignUpForm } from "@/components/Signup/form";
import { useSearchParams } from "next/navigation";

const SignupPage = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type"); // récupère "pro" ou "personnel"
  const type = typeParam === "pro" ? "pro" : "personnel"; // default à personnel

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <SignUpForm type={type} />
    </main>
  );
};

export default SignupPage;