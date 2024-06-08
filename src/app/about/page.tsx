
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-xl">
        This is the about page using Next.js, Tailwind CSS, and TypeScript.
      </p>
    </div>
  );
};

export default About;