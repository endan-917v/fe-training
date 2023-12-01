import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../Common/NavigationMenu";

export default function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between px-4 py-5 lg:h-20 lg:px-24 lg:py-6">
      <div className="flex gap-10">
        <div className="flex h-8 items-center justify-center gap-[10px]">
          <img src="/logo.png" alt="Purple lens with blurred half"></img>
          <span className="text-xl font-medium">Untitled UI</span>
        </div>
        <HeaderNavMenu />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 12H21M3 6H21M3 18H21"
          stroke="#344054"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </header>
  );
}

export const HeaderNavMenu = () => {
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-rows-3 grid-cols-2 lg:w-96">
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Spark</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Inbox</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Insight</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Resolve</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Connect</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Integrate</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-rows-3 grid-cols-2 lg:w-96">
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Blog</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Newsletter</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Events</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Help centre</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Tutorials</NavigationMenuLink>
              <NavigationMenuLink className="py-4 px-6 bg-white text-gray-500 font-medium text-sm">Support</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
