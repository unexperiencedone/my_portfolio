import "./globals.css";

export const metadata = {
  title: "Unexperiencedone's Place",
  description: "Created by Unexperiencedone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-deep-space-blue-950 ">
        {children}
      </body>
    </html>
  );
}
