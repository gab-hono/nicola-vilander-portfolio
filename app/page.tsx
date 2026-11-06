// TEMPORARY — test page for the navigation. Replaced by Hero/About/Works/Contact in step 3.8.
const sections = [
  { id: "top", label: "Hero" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-screen items-center border-b border-line px-5 lg:pr-16 lg:pl-0"
        >
          <h2 className="font-serif text-5xl italic">{section.label}</h2>
        </section>
      ))}
    </>
  );
}