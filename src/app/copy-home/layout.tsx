import HeaderSoft from "@/components/layout/copy-home/HeaderSoft";
import FooterBackTopWrapper from "@/components/layout/copy-home/FooterBackTopWrapper";

export default function CopyHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSoft />
      {children}
      <FooterBackTopWrapper />
    </>
  );
}
