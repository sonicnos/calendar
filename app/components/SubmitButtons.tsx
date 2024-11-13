"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import GithubLogo from "@/public/github.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface iAppProps {
  text: string;
  variant?:
    | "default"
    | "ghost"
    | "secondary"
    | "outline"
    | "destructive"
    | "default"
    | null
    | undefined;

  className?: string;
}

export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader2 className={"size-4 animate-spin mr-2"} /> Please Wait
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn("w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 animate-spin mr-2" />
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GoogleLogo} alt="Google logo" className="size-4 mr-2" />{" "}
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GithubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 animate-spin mr-2" /> Please Wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GithubLogo} alt="Github logo" className="size-4 mr-2" />{" "}
          Sign in with Github
        </Button>
      )}
    </>
  );
}

interface AuthButtonProps {
  provider: "Google" | "Github";
}

export function AuthButton({ provider }: AuthButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 animate-spin mr-2" />
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          {provider === "Google" ? (
            <>
              <Image
                src={GoogleLogo}
                alt="Google logo"
                className="size-4 mr-2"
              />{" "}
              Sign in with Google
            </>
          ) : (
            <>
              <Image
                src={GithubLogo}
                alt="Github logo"
                className="size-4 mr-2"
              />{" "}
              Sign in with Github
            </>
          )}
        </Button>
      )}
    </>
  );
}
