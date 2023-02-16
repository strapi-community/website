export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container sc-header-offset">
      <div>
        <h1 className="sc-heading--two mb-8">Showcases</h1>
        {children}
      </div>
    </section>
  );
}
