import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-32">
      <div className="text-center">
        <p className="text-6xl font-bold text-brand-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
