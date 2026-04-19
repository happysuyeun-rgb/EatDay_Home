import LegalLayout from "../components/LegalLayout";
import privacyHtml from "../legal/privacy-v3-body.html?raw";
import "../styles/legal-doc.css";

export default function Privacy() {
  return (
    <LegalLayout>
      <div
        className="legal-doc"
        dangerouslySetInnerHTML={{ __html: privacyHtml }}
      />
    </LegalLayout>
  );
}
