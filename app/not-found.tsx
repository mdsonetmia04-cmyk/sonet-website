import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-bg px-6 text-center">
      <div className="gold-rule" aria-hidden="true" />
      <h1 className="heading-1 mt-6 text-ink">Page not found</h1>
      <p className="body-2 mt-4 max-w-[480px]">
        This page does not exist, or it moved. The home page has everything else.
      </p>
      <Link href="/" className="btn-primary button-md mt-8">
        Back to the home page
      </Link>
    </main>
  );
}
