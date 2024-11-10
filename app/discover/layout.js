export const metadata = {
  title: "Discover - StreamLine",
  description: "Discover page of StreamLine",
};
import SubHeader from "@/components/headers/SubHeader";

export default function DiscoverLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SubHeader />
        {children}
      </body>
    </html>
  );
}
