"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Game Center</h1>
        </Link>
      </div>
      <div>
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="/sign-in">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;