import prisma from "@/app/lib/db";
import { requireUser } from "@/app/lib/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";

async function getData(userId: string) {
  const data = await prisma.availability.findMany({
    where: {
      userId: userId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

const AvalabilityRoute = async () => {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability</CardTitle>
        <CardDescription>
          In this section you can manage your Availability
        </CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4"
            >
              {item.day}
            </div>
          ))}
        </CardContent>
      </form>
    </Card>
  );
};

export default AvalabilityRoute;
