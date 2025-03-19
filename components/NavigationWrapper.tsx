"use client";

import { usePathname } from "next/navigation";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";

const pagesWithMobileNav = ["/", "/hub", "/shops", "/shelves", "/money"];
const pagesWithTopMobileNav = ["/", "/money"];

export default function NavigationWrapper() {
  const pathname = usePathname();
  const shouldShowMobileNav = pagesWithMobileNav.includes(pathname);
  const shouldShowTopMobileNav = pagesWithTopMobileNav.includes(pathname);


  return (
    <>
      {shouldShowTopMobileNav && <TopNav />}
      {shouldShowMobileNav && <BottomNav />}
    </>
  );
}
