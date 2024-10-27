import { requireUser } from "@/lib/hooks";

const DashboardPage = async () => {
  const session = await requireUser();
  return (
    <div>
      Dashboard page
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default DashboardPage;
