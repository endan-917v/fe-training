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
    <header className="flex h-[72px] items-center justify-between px-4 py-5 lg:h-20 lg:px-24 lg:py-6 md:max-lg:px-28">
      <div className="flex gap-10">
        <div className="flex h-8 items-center justify-center gap-[10px]">
          <img src="/logo.png" alt="Purple lens with blurred half"></img>
          <span className="text-xl font-medium">Untitled UI</span>
        </div>
        <HeaderNavMenu />
      </div>
      <button className="block lg:hidden">
        {/* hamburger menu button */}
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
      </button>
      <button className="hidden lg:block">
        {/* user profile picture button */}
        <img src="/faq-avatars/Avatar-2.png" alt="..." className="h-10 w-10" />
      </button>
    </header>
  );
}

export const HeaderNavMenu = () => {
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-2 grid-rows-3 lg:w-96">
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Spark
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Inbox
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Insight
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Resolve
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Connect
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Integrate
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-2 grid-rows-3 lg:w-96">
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Blog
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Newsletter
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Events
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Help centre
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Tutorials
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/"
                className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
              >
                Support
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
