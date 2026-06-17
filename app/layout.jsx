export const metadata = {
  title: "Admin Dashboard",
  description: "Frontend Technical Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}