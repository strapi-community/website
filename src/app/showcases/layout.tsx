export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">Showcases</h1>
        <h1 className="sc-heading--one">Showcases</h1>
        {children}
      </div>
    </main>
  );
}
