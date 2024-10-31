import { CalendarCheck, HomeIcon, LucideIcon, User2 } from "lucide-react";

interface iAppProps {
  id: number;
  name: string;
  href: string;
  icon: LucideIcon;
}

export const dashboardLinks: iAppProps[] = [
  {
    id: 0,
    name: "Event Types",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Meetings",
    href: "/dashboard/meetings",
    icon: User2,
  },
  {
    id: 2,
    name: "Avalability",
    href: "/dashboard/avalability",
    icon: CalendarCheck,
  },
];
