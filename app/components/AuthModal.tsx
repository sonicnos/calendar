import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { signIn } from "@/lib/auth";
import {
  AuthButton,
  GithubAuthButton,
  GoogleAuthButton,
} from "./SubmitButtons";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try it Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row items-center gap-2">
          <Image src={Logo} alt="logo" className="size-10 " />
          <h4 className="text-3xl font-semibold">
            Loukas <span className="text-primary">calendar</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
            className="w-full"
          >
            {/* <GoogleAuthButton /> */}
            <AuthButton provider="Google" />
          </form>
          {/* <GithubAuthButton /> */}
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
            className="w-full"
          >
            {/* <GoogleAuthButton /> */}
            <AuthButton provider="Github" />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
