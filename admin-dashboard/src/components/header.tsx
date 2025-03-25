"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/global-redux/store";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const subMenu = useSelector((state: RootState) => state.ui.subBreadCrum);


  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem >
          <BreadcrumbLink href="/Home/Dashboard" className="text-[12px]" >Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        {lastSegment && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[12px]">
                {decodeURIComponent(lastSegment).replace(/-/g, " ")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        {subMenu && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[11px]">{subMenu}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
const Header = () => {
  const pathname = usePathname();
  const getPageTitle = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    return segments.length > 0
      ? segments[segments.length - 1].replace(/-/g, " ")
      : "Dashboard";
  };

  return (
    <header>
      <div className="flex items-center justify-end w-full ">

        {/* <div className="flex items-center gap-5 mr-4">

          <MoreVertical className="w-[18px] h-[18px] cursor-pointer" />
        </div> */}
      </div>
      <div className=" py-2">
        <h1 className="roboto-text text-[22px] font-[700] capitalize">
          {getPageTitle(pathname)}
        </h1>
        <Breadcrumbs />
      </div>

    </header>
  );
};

export default Header;
