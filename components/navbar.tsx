import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const NavBar = async () => {
    const apiLimitCount = await getApiLimitCount();
    return ( 
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount} />
            <div className="flex w-full justify-end"></div>
            <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default NavBar;