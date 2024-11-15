import { Button } from "@/components/ui/button";
import { signOut } from "@/app/lib/auth";
import { requireUser } from "@/app/lib/hooks";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import EmptyState from "../components/EmptyState";

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
        <EmptyState title="You have no Event Type" description="You can create your first event type the button below" buttonText="Add event type" href="/dashboard/new"/>
      ) : (
        <p>hey we have events types</p>
      )}
    </>
  );
};

export default DashboardPage;
