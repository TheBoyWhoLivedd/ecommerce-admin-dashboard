import { UserButton, auth } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";

import StoreSwitcher from "@/components/store-switcher";
import { MainNav } from "@/components/main-nav";
// import { ThemeToggle } from "@/components/theme-toggle";
import prismadb from "@/lib/prismadb";
import ThemesToggler from "./theme-toggler";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b relative overflow-x-auto">
      <div className="flex h-16 items-center px-4">
        {/* StoreSwitcher */}
        <div className="z-10 sticky top-0 left-0">
          <StoreSwitcher items={stores} />
        </div>

        {/* MainNav */}
        <div className="flex-1 ml-6 z-0">
          <MainNav className="" />
        </div>

        {/* Right section */}
        <div className="ml-auto flex items-center space-x-4">
          <ThemesToggler />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
