import Link from "next/link";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Auth Layout</h1>
      <div>
        <Link href={"/"}>
          Home Page
        </Link>
      </div>
      {children}
    </div>
  );
}