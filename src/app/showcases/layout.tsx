export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container sc-header-offset mb-28 sm:mb-40">
      <h1 className="sc-heading--two mb-8">Showcases</h1>
      {children}
    </section>
  );
}
