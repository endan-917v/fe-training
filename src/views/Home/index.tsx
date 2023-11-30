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
        <div className="flex flex-col gap-3 pt-3 xl:flex-row">
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
          <p className="mb-3 text-center text-sm font-semibold text-primary-700">
            Features
          </p>
          <h2 className="mb-4 text-center text-3xl font-semibold leading-[38px] text-gray-900">
            Analytics that feels like it&rsquo;s from the future
          </h2>
          <p className="text-center text-lg font-normal leading-7 text-gray-500">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <ul className="flex flex-row flex-wrap gap-y-10">
          {/* features grid */}
          <FeatureListItem
            imgUrl="/featured-icons/icon1.png"
            title="Share team inboxes"
            body="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon2.png"
            title="Deliver instant answers"
            body="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon3.png"
            title="Manage your team with reports"
            body="Measure what matters with Untitled&rsquo;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon4.png"
            title="Connect with customers"
            body="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon5.png"
            title="Connect the tools you already use"
            body="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon6.png"
            title="Our people make the difference"
            body="We&rsquo;re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
          />
        </ul>
      </section>
      <section className="flex flex-col items-center gap-8 bg-gray-50 px-4 py-16">
        {/* testimonial section */}
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
        {/* features section */}
        <ButtonBadge mainBadgeText="Features" className="mb-4 text-sm" />
        <h2 className="mb-4 text-center text-3xl font-semibold leading-[38px] text-gray-900">
          Cutting-edge features for advanced analytics
        </h2>
        <p className="mb-12 text-center text-lg font-normal text-gray-500">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="relative mb-12 max-h-[360px] overflow-hidden">
          {/* huge images container */}
          <div className="relative">
            {/* iphone container */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[460px] w-[230px] -translate-x-1/2 -translate-y-1/2 transform  shadow-3xl"></div>
            <img
              src="/iphone.png"
              alt="..."
              className="mx-auto "
              width={244}
              height={497}
            />
          </div>
        </div>
        <ul className="flex flex-row flex-wrap gap-y-10">
          <FeatureListItem
            imgUrl="/featured-icons/icon1.png"
            title="Share team inboxes"
            body="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
            learnMoreUrl="/"
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon2.png"
            title="Deliver instant answers"
            body="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            learnMoreUrl="/"
          />
          <FeatureListItem
            imgUrl="/featured-icons/icon3.png"
            title="Manage your team with reports"
            body="Measure what matters with Untitled&rsquo;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
            learnMoreUrl="/"
          />
        </ul>
      </section>
      <section className="px-4 py-16">
        {/* faq section */}
        <h2 className="mb-4 text-center text-3xl font-semibold leading-[38px] text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-center text-lg font-normal text-gray-500">
          Everything you need to know about the product and billing.
        </p>
        <div className="mb-12">Accordion</div>
        <div className="flex flex-col items-center justify-center gap-6 px-5 py-8">
          <div className="relative flex items-baseline">
            <img
              src="/faq-avatars/Avatar.png"
              className="h-12 w-12 translate-x-4 transform"
              alt="..."
            ></img>
            <img
              src="/faq-avatars/Avatar-2.png"
              className="z-20 h-14 w-14"
              alt="..."
            ></img>
            <img
              src="/faq-avatars/Avatar-1.png"
              className="h-12 w-12 -translate-x-4 transform"
              alt="..."
            ></img>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl font-medium leading-[30px] text-gray-900">
              Still have questions?
            </p>
            <p className=" text-center text-gray-500">
              Can&rsquo;t find the answer you&rsquo;re looking for? Please chat
              to our friendly team.
            </p>
          </div>
          <Button variant="primary" className="w-[130px]">
            Get in touch
          </Button>
        </div>
      </section>
      <div className="mx-4 border-t border-t-gray-200"></div>
      <section className="px-4 py-16">
        <p className="mb-3 text-sm font-semibold text-primary-700">
          Launch faster
        </p>
        <h2 className="mb-4 text-3xl font-semibold leading-[38px] text-gray-900">
          Build something great
        </h2>
        <p className="mb-12 text-lg font-normal text-gray-500">
          We&rsquo;ve done all the heavy lifting so you don&rsquo;t have to —
          get all the data you need to launch and grow your business faster.
        </p>
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-24 xl:px-4">
          <ul className="grid xl:grid-cols-2 grid-cols-1 gap-8">
            <MetricItem
              metricText="4,000+"
              metricHeading="Global customers"
              metricBody="We&rsquo;ve helped over 4,000 amazing global companies."
            ></MetricItem>
            <MetricItem
              metricText="600%"
              metricHeading="Return on investment"
              metricBody="Our customers have reported an average of ~600% ROI."
            ></MetricItem>
            <MetricItem
              metricText="10k"
              metricHeading="Global downloads"
              metricBody="Our app has been downloaded over 10k times."
            ></MetricItem>
            <MetricItem
              metricText="200+"
              metricHeading="5-star reviews"
              metricBody="We&rsquo;re proud of our 5-star rating with over 200 reviews."
            ></MetricItem>
          </ul>
          <div>
            <img src="/something-great.png" alt="..." />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4 py-16">
        <h2 className="mb-4 text-center text-3xl font-semibold leading-[38px] text-gray-900">
          Start your free trial
        </h2>
        <p className="mb-12 text-center text-lg font-normal text-gray-500">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col gap-3">
          <Button>Get started</Button>
          <Button variant="mono">Learn more</Button>
        </div>
      </section>
    </>
  );
}

function MetricItem({
  metricBody,
  metricHeading,
  metricText,
}: {
  metricBody: string;
  metricHeading: string;
  metricText: string;
}) {
  return (
    <li>
      <p className="text-5xl leading-[60px] -tracking-[0.96px] xl:text-6xl xl:leading-[72px] font-semibold text-center text-primary-600">
        {metricText}
      </p>
      <p className="text-gray-900 font-medium text-lg leading-7 text-center">{metricHeading}</p>
      <p className="text-gray-500 leading-6 text-center">{metricBody}</p>
    </li>
  );
}

function FeatureListItem({
  imgUrl,
  title,
  body,
  learnMoreUrl,
}: {
  imgUrl: string;
  title: string;
  body: string;
  learnMoreUrl?: string;
}) {
  return (
    <li className="flex flex-col items-center gap-4">
      <img src={imgUrl} className="" alt="..."></img>
      <div className="flex flex-col gap-1">
        <h3 className="text-center text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="text-center text-base text-gray-500">{body}</p>
        {learnMoreUrl && (
          <a
            href={learnMoreUrl}
            className="mt-4 flex items-center justify-center gap-2 text-base font-medium text-primary-700"
          >
            <span>Learn more</span>
            <img src="/features-arrow-right.svg" alt="..." />
          </a>
        )}
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
        <span className="mr-2 rounded-2xl bg-white px-2 py-[2px] xl:mr-3">
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
