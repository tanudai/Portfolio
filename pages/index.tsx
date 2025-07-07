import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center bg-dark">
      <div className="mb-6 border-t-2 border-accent w-full max-w-4xl" />

      <div className="my-10">
        <Image
          src="/assets/deploy_illustration.gif"
          alt="Deploying Illustration"
          width={200}
          height={200}
          priority
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-200 animate-pulse">
        DEPLOYING... EVENTUALLY
      </h1>

      <footer className="absolute bottom-6 text-xs text-gray-400">
        @TANUDAI is on a coffee break!
      </footer>
    </div>
  );
}