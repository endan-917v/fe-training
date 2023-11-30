import Button from "../../components/Common/Button";
import { cn } from "../../lib/utils";

export default function Home() {
  return (
    <>
      <section className="px-4 py-16">
        <ButtonBadge
          innerBadgeText="New feature"
          mainBadgeText="Check out the team dashboard"
          isIconIncluded
        />
        <div className="flex flex-col gap-4 py-4">
          <h1 className="line text-center text-4xl font-semibold leading-[44px] -tracking-[0.72px] text-gray-900">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-center text-lg font-normal leading-7 text-gray-500">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-3 lg:flex-row">
          <Button variant="primary">Sign up</Button>
          <Button variant="mono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_2315_1085)">
                <path
                  d="M9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332Z"
                  stroke="#344054"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33329 6.6665L13.3333 9.99984L8.33329 13.3332V6.6665Z"
                  stroke="#344054"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2315_1085">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Demo
          </Button>
        </div>
        <div className="px-4 py-16">
          <img src="/macbook-small.png" alt="..."></img>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-center text-base font-medium text-gray-500">
            Join 4,000+ companies already growing
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <CompanyLogo
              imgUrl="/company-icons/layers.svg"
              name="Layers"
            ></CompanyLogo>
            <CompanyLogo
              imgUrl="/company-icons/sisyphus.svg"
              name="Sisyphus"
            ></CompanyLogo>
            <CompanyLogo
              imgUrl="/company-icons/circooles.svg"
              name="Circooles"
            ></CompanyLogo>
            <CompanyLogo
              imgUrl="/company-icons/catalog.svg"
              name="Catalog"
            ></CompanyLogo>
            <CompanyLogo
              imgUrl="/company-icons/quotient.svg"
              name="Quotient"
            ></CompanyLogo>
            <CompanyLogo
              imgUrl="/company-icons/hourglass.svg"
              name="Hourglass"
            ></CompanyLogo>
          </div>
        </div>
      </section>
      <div className="mx-4 border-t border-t-gray-200"></div>
      <section className="px-4 py-16">
        <div className=" pb-12">
          {/* features header container */}
          <h2 className="mb-3 text-center text-sm font-semibold text-primary-700">
            Features
          </h2>
          <p className="mb-3 text-center text-3xl font-semibold leading-[38px] text-gray-900">
            Analytics that feels like it&rsquo;s from the future
          </p>
          <p className="text-center text-lg font-normal leading-7 text-gray-500">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <ul className="flex flex-row flex-wrap gap-y-10">
          {/* features grid */}
          <FeatureBlock
            imgUrl="/featured-icons/icon1.png"
            title="Share team inboxes"
            body="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          />
          <FeatureBlock
            imgUrl="/featured-icons/icon2.png"
            title="Deliver instant answers"
            body="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          />
          <FeatureBlock
            imgUrl="/featured-icons/icon3.png"
            title="Manage your team with reports"
            body="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          />
          <FeatureBlock
            imgUrl="/featured-icons/icon4.png"
            title="Connect with customers"
            body="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
          />
          <FeatureBlock
            imgUrl="/featured-icons/icon5.png"
            title="Connect the tools you already use"
            body="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
          />
          <FeatureBlock
            imgUrl="/featured-icons/icon6.png"
            title="Our people make the difference"
            body="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
          />
        </ul>
      </section>
      <section className="flex flex-col items-center gap-8 bg-gray-50 px-4 py-16">
        {/* testi section */}
        <div className="flex gap-[10px]">
          <img src="/company-icons/sisyphus.svg" alt="..." />
          <span className="text-2xl font-semibold text-gray-900">Sisyphus</span>
        </div>
        <figure className="flex flex-col gap-8">
          <blockquote className="text-center text-3xl font-medium leading-[38px]">
            We&rsquo;ve been using Untitled to kick start every new project and
            can&rsquo;t imagine working without it.
          </blockquote>
          <figcaption>
            <img
              src="/candice-wu-avatar.png"
              alt="..."
              className="mx-auto mb-4"
              width={64}
              height={64}
            />
            <div className="mb-1 text-center text-lg font-medium text-gray-900">
              Candice Wu
            </div>
            <div className="text-center text-base  text-gray-500">
              Product Manager, Sisyphus
            </div>
            {/* !TODO: check this later if correct semantic */}
          </figcaption>
        </figure>
      </section>
      <section className="px-4 py-16">
        <ButtonBadge mainBadgeText="Features" className="mb-4 text-sm" />
        <p className="mb-4 text-center text-3xl font-semibold leading-[38px] text-gray-900">
          Cutting-edge features for advanced analytics
        </p>
        <p className="mb-12 text-center text-lg font-normal text-gray-500">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="relative max-h-[360px] overflow-hidden">
          {/* huge images container */}
          <div className="relative">
            {/* iphone container */}
            <div className="absolute -z-10 left-1/2 top-1/2 h-[460px] w-[230px] -translate-x-1/2 -translate-y-1/2 transform  shadow-3xl"></div>
            <img
              src="/iphone.png"
              alt="..."
              className="mx-auto "
              width={244}
              height={497}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureBlock({
  imgUrl,
  title,
  body,
}: {
  imgUrl: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex flex-col items-center gap-4">
      <img src={imgUrl} className="" alt="..."></img>
      <div className="flex flex-col gap-1">
        <h3 className="text-center text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="text-center text-base text-gray-500">{body}</p>
      </div>
    </li>
  );
}

function CompanyLogo({ name, imgUrl }: { name: string; imgUrl: string }) {
  return (
    <div className="flex h-[34px] items-center justify-center gap-2">
      <img src={imgUrl} alt="..."></img>
      <span className="text-lg font-semibold text-gray-900">{name}</span>
    </div>
  );
}

function ButtonBadge({
  innerBadgeText,
  mainBadgeText,
  className,
  isIconIncluded = false,
}: {
  innerBadgeText?: string;
  mainBadgeText: string;
  isIconIncluded?: boolean;
  className?: string;
}) {
  const defaultClasses =
    "mx-auto flex h-[22px] items-center rounded-2xl bg-primary-50 p-4 pr-[10px] text-xs font-medium text-primary-700";

  const mainClasses = cn(defaultClasses, className);

  return (
    <button className={mainClasses}>
      {innerBadgeText && (
        <span className="mr-2 rounded-2xl bg-white px-2 py-[2px] lg:mr-3">
          {innerBadgeText}
        </span>
      )}
      <span className="">{mainBadgeText}</span>
      {isIconIncluded && (
        <svg
          className="ml-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668"
            stroke="#9E77ED"
            strokeWidth="1.3333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
