


export const metadata = {
  title: "session 23 -next.js API Ruote",
  description: "next.js API Ruote",
  keywords: 'tables, hand, handmade ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui', padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
