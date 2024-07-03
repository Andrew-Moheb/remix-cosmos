import { Link } from "@remix-run/react";

function TopNav() {
  return (
    <div className="flex items-center gap-5 justify-center fixed top-10 left-0 w-full">
      <h1 className="text-3xl">Remix Test</h1>
      <Link
        to="/navbar"
        className="p-3 bg-slate-100 rounded hover:bg-slate-200"
      >
        NavLink
      </Link>
      <Link
        to="/popularcard"
        className="p-3 bg-slate-100 rounded hover:bg-slate-200"
      >
        Popular Card
      </Link>
      <Link
        to="/categoryCard"
        className="p-3 bg-slate-100 rounded hover:bg-slate-200"
      >
        Category Card
      </Link>
      <Link
        to="/banner"
        className="p-3 bg-slate-100 rounded hover:bg-slate-200"
      >
        Banner
      </Link>
    </div>
  );
}

export default TopNav;
