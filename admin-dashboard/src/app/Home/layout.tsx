import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";


export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="w-full ml-[0px] mt-[10px]">
                <Header />
                {children}

            </main>

        </SidebarProvider>
    );
}
