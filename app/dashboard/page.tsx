import { Button } from "@/components/ui/button";
import { signOut } from "@/app/lib/auth";
import { requireUser } from "@/app/lib/hooks";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      username: true,
      eventType: {
        select: {
          id: true,
          active: true,
          title: true,
          url: true,
          duration: true 
        }
      }
    }
  })

  if(!data) {
    return notFound()
  }

  return data
}


const DashboardPage = async () => {

  const session = await requireUser();
  const data = await getData(session.user?.id as string)

  return (
    <>
      {data.eventType.length === 0 ? (
        <p>no data</p>
      ) : (
        <p>hey we have events types</p>
      )}


      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>sign out</Button>
      </form>
    </>
  );
};

export default DashboardPage;
