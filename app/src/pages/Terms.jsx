import LegalLayout from "../components/LegalLayout";
import termsHtml from "../legal/terms-v3-body.html?raw";
import "../styles/legal-doc.css";

export default function Terms() {
  return (
    <LegalLayout>
      <div
        className="legal-doc"
        dangerouslySetInnerHTML={{ __html: termsHtml }}
      />
    </LegalLayout>
  );
}
