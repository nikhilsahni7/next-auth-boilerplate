"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Appbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push("/")}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <h1 className="text-xl font-bold">MyApp</h1>
        </div>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <span className="hidden sm:inline">
                Hello, {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/signup")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Sign up
              </button>
              <button
                onClick={() => signIn()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
