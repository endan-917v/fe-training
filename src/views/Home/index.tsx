import Button from '../../components/Common/Button'

export default function Home() {
    return (
        <>
            <section className="px-4 py-16">
                <ButtonBadgeCTA />
                <div className="flex flex-col gap-4 py-4">
                    <h1 className="line text-center text-4xl font-semibold leading-[44px] -tracking-[0.72px] text-gray-900">
                        Beautiful analytics to grow smarter
                    </h1>
                    <p className="text-center text-lg font-normal leading-7 text-gray-500">
                        Powerful, self-serve product and growth analytics to
                        help you convert, engage, and retain more users. Trusted
                        by over 4,000 startups.
                    </p>
                </div>
                <div className="flex flex-col gap-3 pt-3 lg:flex-row">
                    <Button variant="primary"></Button>
                    <Button variant="mono"></Button>
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
            <div className="border-t-primary-100 mx-4 border-t"></div>
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
                        Powerful, self-serve product and growth analytics to
                        help you convert, engage, and retain more users. Trusted
                        by over 4,000 startups.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap gap-y-10">
                    {/* features grid */}
                    <FeatureBlock></FeatureBlock>
                    <FeatureBlock></FeatureBlock>
                    <FeatureBlock></FeatureBlock>
                    <FeatureBlock></FeatureBlock>
                    <FeatureBlock></FeatureBlock>
                    <FeatureBlock></FeatureBlock>
                </div>
            </section>
            <section className="flex flex-col items-center gap-8 px-4 py-16">
                <div className="flex gap-[10px]">
                    <img src="/company-icons/sisyphus.svg" alt="..." />
                    <span className="text-2xl font-semibold text-gray-900">
                        Sisyphus
                    </span>
                </div>
                <figure className="flex flex-col gap-8">
                    <blockquote className="text-center text-3xl font-medium leading-[38px]">
                        We&rsquo;ve been using Untitled to kick start every new
                        project and can&rsquo;t imagine working without it.
                    </blockquote>
                    <figcaption>
                        <img
                            src="/candice-wu-avatar.png"
                            alt="..."
                            className="mb-4 mx-auto"
                            width={64}
                            height={64}
                        />
                        <div className='mb-1 text-gray-900 text-lg font-medium text-center'>Candice Wu</div>
                        <div className='text-gray-500 text-base  text-center'>Product Manager, Sisyphus</div>
                        {/* !TODO: check this later if correct semantic */}
                    </figcaption>
                </figure>
            </section>
        </>
    )
}

function FeatureBlock() {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src="" className="mb-4" alt="..."></img>
            <div className="flex flex-col gap-1">
                <p className="text-center text-lg font-medium text-gray-900">
                    Share team inboxes
                </p>
                <p className="text-center text-base text-gray-500">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                </p>
            </div>
        </div>
    )
}

function CompanyLogo({ name, imgUrl }: { name: string; imgUrl: string }) {
    return (
        <div className="flex h-[34px] items-center justify-center gap-2">
            <img src={imgUrl} alt="..."></img>
            <span className="text-lg font-semibold text-gray-900">{name}</span>
        </div>
    )
}

function ButtonBadgeCTA() {
    return (
        <button className="mx-auto flex h-[22px] items-center rounded-2xl bg-primary-50 p-4 pr-[10px] text-xs font-medium text-primary-700">
            <span className="mr-2 rounded-2xl bg-white px-2 py-[2px] lg:mr-3">
                New feature
            </span>
            <span className="mr-1">Check out the team dashboard</span>
            <svg
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
        </button>
    )
}
