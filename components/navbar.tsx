import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";

const NavBar = () => {
    return ( 
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end"></div>
            <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default NavBar;