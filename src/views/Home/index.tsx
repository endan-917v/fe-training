export default function Home() {
  return (
    <div>
      <section className="px-4 py-16">
        <ButtonBadgeCTA />
      </section>
    </div>
  );
}

function ButtonBadgeCTA() {
  return (
    <button className="bg-primary-50 text-primary-700 mx-auto flex h-[22px] items-center rounded-2xl p-4 pr-[10px] text-xs font-medium">
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
  );
}
