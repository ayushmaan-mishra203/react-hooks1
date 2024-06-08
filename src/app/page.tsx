// src/app/page.tsx

import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p className="mt-4 text-xl">
        Welcome to the home page.
      </p>
      <Link href="/about">
        <span className="mt-4 text-blue-500 hover:underline">Go to About Page</span>
      </Link>
    </div>
  );
};

export default Home;
