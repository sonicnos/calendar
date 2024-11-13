import SettingsForm from "@/app/components/SettingsForm";
import prisma from "@/lib/db";
import { requireUser } from "@/app/lib/hooks";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      email: true,
      image: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}
const Settingsroute = async () => {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  return (
    <SettingsForm
      email={data.email as string}
      fullName={data.name as string}
      profileImage={data.image as string}
    />
  );
};

export default Settingsroute;
