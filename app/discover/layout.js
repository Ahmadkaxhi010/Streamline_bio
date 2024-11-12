export const metadata = {
  title: "Discover - StreamLine",
  description: "Discover page of StreamLine",
};
// import SubHeader from "@/components/headers/SubHeader";
import MainHeader from "@/components/headers/MainHeader";

export default function DiscoverLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
