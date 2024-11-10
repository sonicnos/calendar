import { Button } from "@/components/ui/button";
import { signOut } from "@/app/lib/auth";
import { requireUser } from "@/app/lib/hooks";

const DashboardPage = async () => {
  const session = await requireUser();
  return (
    <div>
      Dashboard page
      <p>{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>sign out</Button>
      </form>
    </div>
  );
};

export default DashboardPage;
