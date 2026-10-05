import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms for using the Abhivorn Technologies website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="6 October 2026" path="/terms">
      <p>
        These terms apply to your use of this website, operated by {site.legalName}. By using the site you agree to them. Work we do for clients
        is governed by the separate proposal or agreement signed for that project.
      </p>

      <h2>Use of the website</h2>
      <p>
        You may browse and share content from this website for personal or business information purposes. You may not misuse the site, attempt
        to disrupt it, or use it for anything unlawful.
      </p>

      <h2>Content and intellectual property</h2>
      <p>
        Text, graphics, logos and product names on this site, including VORQARD and VORN HR, belong to {site.legalName} or our clients and are
        protected by intellectual property laws. Project descriptions are shared with our clients&apos; knowledge.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        We work to keep information on this site accurate and current, but it is provided for general information only and may change without
        notice. Nothing on this site is a binding offer — scope, timelines and commercial terms are confirmed only in a written proposal.
      </p>

      <h2>Links to other websites</h2>
      <p>This site links to other websites, including client sites and app stores. We are not responsible for their content or practices.</p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {site.legalName} is not liable for any loss arising from use of this website or reliance on its content.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts of Hyderabad, Telangana have jurisdiction.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
