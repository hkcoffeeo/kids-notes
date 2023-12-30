import "./App.css";

function App() {
  return (
    <>
      <div>notes on kids / things i wish to know after having kids</div>
      {links.map((link) => (
        <div>
          <a href={link.url}>{link.title}</a>
        </div>
      ))}
    </>
  );
}

const links: Links[] = [
  {
    title: "Allergic Rhinitis",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Allergic%20Rhinitis.pdf",
  },
  {
    title: "Asthma in Children",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Asthma%20in%20Children.pdf",
  },
  {
    title: "Caring for Your Child after Ostomy Surgery",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Caring%20for%20Your%20Child%20after%20Ostomy%20Surgery.pdf",
  },
  {
    title: "Clean Hands Save Lives",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Clean%20Hands%20Save%20Lives.pdf",
  },
  {
    title: "Constipation in Children",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Constipation%20in%20Children.pdf",
  },
];

type Links = { title: string; url: string };

export default App;
