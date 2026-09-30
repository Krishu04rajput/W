import "./globals.css";

export const metadata = {
  title: "Winter Arc — Class 10 98% Mission",
  description: "A 90-day Class 10 CBSE study planner with daily tasks, tests, revision, streaks and local progress."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
