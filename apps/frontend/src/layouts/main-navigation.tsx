import Main from "./main";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Main>{children}</Main>
    </div>
  );
}
