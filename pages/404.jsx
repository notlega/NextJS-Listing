import Link from 'next/link';

const Custom404 = () => (
  <div className="hero min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Page not found</h1>
        <p className="py-6">
          The content you&apos;re looking for doesn&apos;t exist. Either it was removed, or you mistyped the link.
        </p>
        <Link href="/" className="btn btn-primary">Return to home</Link>
      </div>
    </div>
  </div>
);

export default Custom404;
