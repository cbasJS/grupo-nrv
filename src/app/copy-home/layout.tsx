import HeaderSoft from "@/components/layout/copy-home/HeaderSoft";
import FooterSoft from "@/components/layout/copy-home/FooterSoft";

export default function CopyHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSoft />
      {children}
      <FooterSoft />
    </>
  );
}
