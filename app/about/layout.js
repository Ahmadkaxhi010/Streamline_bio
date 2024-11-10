import MainHeader from "@/components/headers/MainHeader";
export const metadata = {
  title: "About - StreamLine",
  description: "About page of StreamLine",
};

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
