import exp from "constants";
import SideNav from "../ui/dashboard/sidenav";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="flex-grow p-4 md:p-8">{children}</main>
    </div>
  );
}