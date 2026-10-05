import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Abhivorn Technologies collects, uses and protects personal data on abhivorn.com, including contact forms, cookies and analytics.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="6 October 2026" path="/privacy">
      <p>
        {site.legalName} (&quot;Abhivorn&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what personal data we
        collect when you use this website, why we collect it, and the choices you have. We process personal data in line with India&apos;s
        Digital Personal Data Protection Act, 2023.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> when you fill in our contact form, email, call or message us on WhatsApp, we receive your
          name, email address, phone number, company, team size and the details of your enquiry.
        </li>
        <li>
          <strong>How you arrived:</strong> with your enquiry we record the page you first landed on and the website or campaign that referred
          you, so we know which channels help people find us.
        </li>
        <li>
          <strong>Usage data:</strong> we measure visits, pages viewed, device type, browser, approximate location (city/country) and page
          loading performance. Basic visit counts use cookieless analytics. More detailed analytics (Google Analytics and Microsoft Clarity,
          which can record anonymised clicks and scrolling to help us improve the site) only run if you accept cookies.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and prepare proposals you ask for.</li>
        <li>To understand how visitors use the website so we can improve content and usability.</li>
        <li>To measure the effectiveness of our marketing.</li>
      </ul>
      <p>We do not sell your personal data, and we do not share it with third parties for their own marketing.</p>

      <h2>Cookies and analytics</h2>
      <p>
        When you first visit, we ask whether you accept analytics cookies. If you decline, only cookieless measurement runs. You can change
        your choice at any time by clearing this site&apos;s data in your browser, after which we will ask again.
      </p>

      <h2>Service providers</h2>
      <p>
        We use trusted providers to run this website: Vercel (hosting and cookieless analytics), EmailJS (delivering contact form messages to
        our inbox), and, with your consent, Google Analytics and Microsoft Clarity. These providers process data on our behalf under their own
        security and privacy commitments.
      </p>

      <h2>How long we keep data</h2>
      <p>
        We keep enquiry details for as long as needed to respond and to maintain our business relationship, and delete them when no longer
        required. Analytics data is kept in aggregated form.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal data we hold about you, withdraw consent, or raise a grievance. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within a reasonable time.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName}, Cyber Towers, HITEC City, Hyderabad, Telangana, India. Email: <a href={`mailto:${site.email}`}>{site.email}</a> ·
        Phone: {site.phone}
      </p>
    </LegalPage>
  );
}
