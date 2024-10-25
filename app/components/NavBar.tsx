import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import AuthModal from "./AuthModal";

const NavBar = () => {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="size-10 " />
        <h4 className="text-3xl font-semibold">
          Loukas <span className="text-primary">calendar</span>
        </h4>
      </Link>

      <AuthModal />
    </div>
  );
};

export default NavBar;
