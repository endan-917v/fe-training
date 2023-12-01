export default function Header() {
  return (
    <header className="flex h-[72px] px-4 py-5 lg:h-20 justify-between items-center lg:px-24 lg:py-6">
      <div className="flex h-8 items-center justify-center gap-[10px]">
        <img src="/logo.png" alt="Purple lens with blurred half"></img>
        <span className="text-xl font-medium">Untitled UI</span>
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
