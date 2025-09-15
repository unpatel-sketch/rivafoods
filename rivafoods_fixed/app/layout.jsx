export const metadata = {
  title: "Riva Fine Foods Canada",
  description: "Premium Indian sweets & fine foods crafted with authenticity, now in Canada.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
