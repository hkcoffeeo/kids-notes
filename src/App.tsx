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
  {
    title: "Dengue Fever",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Dengue%20Fever.pdf",
  },
  {
    title: "Diarrhoea In Children",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Diarrhoea%20In%20Children.pdf",
  },
  {
    title: "Febrile Seizures",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Febrile%20Seizures.pdf",
  },
  {
    title: "Fever in Children (English)_PCEfic1117_6th_22112017",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Fever%20in%20Children%20(English)_PCEfic1117_6th_22112017.pdf",
  },
  {
    title: "Gastroenteritis and Viral Gastritis",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Gastroenteritis%20and%20Viral%20Gastritis.pdf",
  },
  {
    title: "Gastroesophageal Reflux Disease GERD",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Gastroesophageal%20Reflux%20Disease%20GERD.pdf",
  },
  {
    title: "Hand Foot Mouth Disease",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Hand%20Foot%20Mouth%20Disease.pdf",
  },
  {
    title: "Head Injury in Children",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Head%20Injury%20in%20Children.pdf",
  },
  {
    title: "Help Your Child to Manage Pain",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Help%20Your%20Child%20to%20Manage%20Pain.pdf",
  },
  {
    title: "Intravenous Cannulation And Its Complications",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Intravenous%20Cannulation%20And%20Its%20Complications.pdf",
  },
  {
    title: "Jaundice in Babies",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Jaundice%20in%20Babies.pdf",
  },
  {
    title: "KKH_Bronchiolitis_PPmb1117_2nd",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/KKH_Bronchiolitis_PPmb1117_2nd.pdf",
  },
  {
    title: "Kawasaki Disease",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Kawasaki%20Disease.pdf",
  },
  {
    title: "Keping Your Child Safe in the Hospital",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Keping%20Your%20Child%20Safe%20in%20the%20Hospital.pdf",
  },
  {
    title: "Procedural Sedation and Analgesia",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Procedural%20Sedation%20and%20Analgesia.pdf",
  },
  {
    title: "QR codes for injury prevention poster KKH template 12.4.22",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/QR%20codes%20for%20injury%20prevention%20poster%20KKH%20template%2012.4.22.pdf",
  },
  {
    title: "Taking Care of your Cast",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Taking%20Care%20of%20your%20Cast.pdf",
  },
  {
    title: "Tonsils and Adenoids",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Tonsils%20and%20Adenoids.pdf",
  },
  {
    title: "Urinary Tract Infection (Children)",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Urinary%20Tract%20Infection%20(Children).pdf",
  },
  {
    title: "Bedwetting in Children",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Bedwetting%20in%20Children.pdf",
  },
  {
    title: "Henoch-Schonlein Purpura(HSP)",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Henoch-Schonlein%20Purpura(HSP).pdf",
  },
  {
    title: "Imaging Tests for Urinary Tract Infections",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Imaging%20Tests%20for%20Urinary%20Tract%20Infections.pdf",
  },
  {
    title: "Neonatal_Infantile Pyrexia",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Neonatal_Infantile%20Pyrexia.pdf",
  },
  {
    title: "Tonsils and Adenoids",
    url: "https://singhealth.blob.core.windows.net/kkh/Children/Tonsils%20and%20Adenoids.pdf",
  },
];

type Links = { title: string; url: string };

export default App;
