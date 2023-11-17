import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-6">
          <a
            href="/profile"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            My Profile
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Products
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Liked
          </a> */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
