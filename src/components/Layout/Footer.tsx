type FooterLinksItem = {
  label: string;
  url?: string;
  isNew?: boolean;
};
type FooterLinksResource = {
  title: string;
  links: FooterLinksItem[];
};

type FooterLinksType = FooterLinksResource[];

const footerLinks: FooterLinksType = [
  {
    title: "Product",
    links: [
      {
        label: "Overview",
      },
      {
        label: "Features",
      },
      {
        label: "Solutions",
        isNew: true,
      },
      {
        label: "Tutorials",
      },
      {
        label: "Pricing",
      },
      {
        label: "Releases",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About us",
      },
      {
        label: "Careers",
      },
      {
        label: "Press",
      },
      {
        label: "News",
      },
      {
        label: "Media kit",
      },
      {
        label: "Contact",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
      },
      {
        label: "Newsletter",
      },
      {
        label: "Events",
      },
      {
        label: "Help centre",
      },
      {
        label: "Tutorials",
      },
      {
        label: "Support",
      },
    ],
  },
  {
    title: "Use cases",
    links: [
      {
        label: "Startups",
      },
      {
        label: "Enterprise",
      },
      {
        label: "Government",
      },
      {
        label: "SaaS",
      },
      {
        label: "Marketplaces",
      },
      {
        label: "Ecommerce",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Twitter",
      },
      {
        label: "LinkedIn",
      },
      {
        label: "Facebook",
      },
      {
        label: "GitHub",
      },
      {
        label: "AngelList",
      },
      {
        label: "Dribbble",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms",
      },

      {
        label: "Privacy",
      },

      {
        label: "Cookies",
      },

      {
        label: "Licenses",
      },

      {
        label: "Settings",
      },

      {
        label: "Contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 px-4 py-12 lg:gap-16 lg:px-20 lg:py-16 md:max-lg:px-28">
      <div className="mb-8 grid grid-cols-2 gap-8 lg:grid-cols-6 lg:px-8">
        {footerLinks.map((value, index) => {
          return (
            <nav className="flex flex-col gap-3" key={index}>
              <p className="text-sm font-semibold text-gray-400">
                {value.title}
              </p>
              <FooterLinksList links={value.links}></FooterLinksList>
            </nav>
          );
        })}
      </div>
      <div className="border-t border-t-gray-200"></div>
      <div className="flex flex-col gap-6 lg:px-8 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-[10px]">
          <img src="/logo.png" alt="Purple lens with blurred half"></img>
          <span className="text-xl font-medium">Untitled UI</span>
        </div>
        <p className="text-base text-gray-400">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterLinksList({ links }: { links: FooterLinksItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3">
      {links.map((value, index: number) => {
        return (
          <li key={index}>
            <a
              href={value.url}
              className="flex gap-2 font-medium text-gray-500 hover:cursor-pointer hover:underline"
            >
              {value.label}
              {value.isNew && (
                <button className="bg-success-50 text-success-700 rounded-2xl px-2 py-[2px] text-xs font-medium">
                  New
                </button>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
