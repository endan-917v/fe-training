import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../Common/NavigationMenu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../Common/Sheet";

type NavLinkChildType = {
  url: string;
  label: string;
};

type NavLinkParentType = {
  title: string;
  url?: string;
  children?: NavLinkChildType[];
};

const headerLinks: NavLinkParentType[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Products",
    children: [
      {
        label: "Spark",
        url: "/",
      },
      {
        label: "Inbox",
        url: "/",
      },
      {
        label: "Insight",
        url: "/",
      },
      {
        label: "Resolve",
        url: "/",
      },
      {
        label: "Connect",
        url: "/",
      },
      {
        label: "Integrate",
        url: "/",
      },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        label: "Blog",
        url: "/",
      },
      {
        label: "Newsletter",
        url: "/",
      },
      {
        label: "Events",
        url: "/",
      },
      {
        label: "Event centre",
        url: "/",
      },
      {
        label: "Tutorials",
        url: "/",
      },
      {
        label: "Support",
        url: "/",
      },
    ],
  },
  {
    title: "Pricing",
    url: "/",
  },
];

export default function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between px-4 py-5 md:max-lg:px-28 lg:h-20 lg:px-24 lg:py-6">
      <div className="flex gap-10">
        <div className="flex h-8 items-center justify-center gap-[10px]">
          <img src="/logo.png" alt="Purple lens with blurred half"></img>
          <span className="text-xl font-semibold text-gray-900">
            Untitled UI
          </span>
        </div>
        {/* desktop nav */}
        <HeaderNavMenu className="hidden lg:block" />
      </div>
      {/* mobile nav header */}
      <MobileHeaderNavMenu />
      <button className="hidden lg:block" type="button">
        {/* user profile picture button */}
        <img src="/faq-avatars/Avatar-2.png" alt="..." className="h-10 w-10" />
      </button>
    </header>
  );
}

export const HeaderNavMenu = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      {/* nav for both desktop and mobile controlled by media queries */}
      <NavigationMenu>
        <NavigationMenuList className="flex-col items-baseline lg:flex-row lg:items-center">
          {headerLinks.map((value, index) => {
            if (!value.children && value.url) {
              // if no children and has url, display solo
              return (
                <NavMenuItemSolo
                  title={value.title}
                  url={value.url}
                  key={index}
                />
              );
            }

            if (value.children) {
              return (
                <NavMenuItemExtended
                  title={value.title}
                  key={index}
                  children={value.children}
                />
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export const NavMenuItemSolo = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={url} className={navigationMenuTriggerStyle()}>
        {title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export const NavMenuItemExtended = ({
  title,
  children,
}: {
  title: string;
  children: NavLinkChildType[];
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent className="grid w-[300px] grid-cols-2 grid-rows-3 md:max-lg:w-80 lg:w-96">
        {children.map((value, index) => {
          return (
            <NavigationMenuLink
              key={index}
              href={value.url}
              className="bg-white px-6 py-4 text-sm font-medium text-gray-500"
            >
              {value.label}
            </NavigationMenuLink>
          );
        })}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const MobileHeaderNavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="block lg:hidden"
        title="Hamburger Menu"
        type="button"
      >
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
      </SheetTrigger>
      <SheetContent className="w-full bg-white/90 md:bg-white">
        <SheetHeader>
          <HeaderNavMenu />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
