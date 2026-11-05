export default function Home() {
  return (
    <main className="min-h-screen space-y-8 p-12">
      <h1 className="font-serif text-6xl italic leading-tight">
        Nícola Iris
        <br />
        Vilander Gajardo
      </h1>
      <p className="max-w-prose text-lg">
        Body text in Work Sans. Kaksi etelää · Ormazábal · Irarrázabal.
      </p>
      <p className="text-muted">Secondary text in muted.</p>
      <p className="text-accent">Accent colour.</p>
      <div className="h-24 border border-dashed border-line bg-surface" />
    </main>
  );
}