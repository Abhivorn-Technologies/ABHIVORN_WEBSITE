import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout hideFooter={true}>
      <section className="pt-24 pb-16 bg-primary text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/80">
              We are committed to safeguarding your data and being transparent about how we collect and use information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-gray-700 leading-relaxed"
          >
            <p className="mb-10 text-lg">
              Respect for the privacy of your personal information is extremely important to Abhivorn Technologies. We are committed to securing any personal information that we collect, maintain, or use on this website or mobile application (“Site”) as described in this Privacy Policy and in compliance with applicable laws. This Privacy Policy is intended to help you understand what information is gathered by this Site, how Abhivorn Technologies uses that information, and what safeguards are in place to protect that information.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information Collected by This Site (PII)</h2>
                <p>
                  When interacting with our Site, you may be asked to provide personally identifiable information (“PII”). This includes details that can identify or locate you, such as your name, contact address, telephone number, email address, and similar data. If you provide PII to Abhivorn Technologies, we may enrich or combine it with information obtained from trusted third-party sources. By using this Site and providing your PII, you consent to Abhivorn Technologies’s use of your information as described in this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Abhivorn Technologies Uses Your PII:</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To respond to your inquiries regarding our information, products, or services.</li>
                  <li>To manage your account if you have registered on our Site.</li>
                  <li>To keep you informed about our offerings.</li>
                  <li>For legal compliance, including enforcing our rights, adhering to applicable laws, and safeguarding Site users.</li>
                  <li>To assess your suitability for employment if you apply for a position through this Site.</li>
                  <li>For essential business operations, such as Site administration, marketing, advertising, and research and development.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Personal Information Collected by This Site (Non-PII)</h2>
                <p className="mb-4">
                  Our Site may also collect information that does not personally identify you (“Non-PII”). This includes non-personally identifiable data you choose to provide or post on the Site. Non-PII can also be gathered through technologies like cookies and pixel tags.
                </p>
                <p className="mb-4">
                  Cookies are small data files stored on your computer by the Site. Pixel tags (also known as web beacons or single-pixel GIFs) enable the Site to collect web log information. A pixel tag is a small graphic embedded in a web page or email that tracks page views or email opens. Abhivorn Technologies and our service providers may use these technologies to identify your IP address, browser type, domain name, and the specific web pages you navigate. We use such Non-PII to manage and enhance our Site and for routine business purposes. We reserve the right to maintain, update, disclose, or otherwise use Non-PII without restriction.
                </p>
                <p>
                  Most web browsers offer options to manage cookies, allowing you to erase them, block them, or receive notifications when one is stored. Please consult your browser's instructions for these functions. Note that disabling cookies may affect your ability to fully utilize all features of the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing Practices</h2>
                <p className="mb-4">
                  Except as outlined below, Abhivorn Technologies will not share your PII with third parties without your explicit consent.
                </p>
                <p className="mb-4">
                  In specific situations, Abhivorn Technologies may share your PII with service providers who require this information to deliver operational or support services to us. This includes services such as email marketing, data management, database hosting, payment processing, or logistics. To ensure the privacy and security of your PII, these service providers are contractually obligated to protect your information and are restricted from using it for any purpose other than providing services to Abhivorn Technologies.
                </p>
                <p className="mb-4">
                  Abhivorn Technologies may also disclose information to government entities and other relevant parties when we genuinely believe such disclosure is legally mandated. We may also access or share your information to protect the legal rights of Abhivorn Technologies, its employees, and agents; to protect the safety and security of our users; and to prevent fraudulent activities.
                </p>
                <p>
                  Furthermore, Abhivorn Technologies may transfer PII and Non-PII to a third party in connection with the sale, assignment, or transfer of this Site. In such an event, Abhivorn Technologies will ensure the buyer agrees to handle PII in line with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Advertising Practices</h2>
                <p className="mb-4">
                  Third-party service providers working with Abhivorn Technologies may deliver advertisements on our behalf across the Internet. Some of these ads might be personalized based on your interactions with our Site. We do not share any personally identifiable information with these third-party advertising service providers. If you prefer not to receive personalized advertisements from Abhivorn Technologies on third-party websites, you can visit the Network Advertising Initiative Opt-Out page: <a href="http://www.networkadvertising.org/managing/opt_out.asp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/managing/opt_out.asp</a>.
                </p>
                <p>
                  The Network Advertising Initiative provides valuable information about online advertising companies and how to opt out of interest-based advertising from their members. Refer to <a href="http://www.networkadvertising.org/participating-networks" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/participating-networks</a> for a list of NAI members and <a href="http://www.networkadvertising.org/managing/opt_out.asp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/managing/opt_out.asp</a> for the opt-out page. You can also learn about online behavioral advertising and opt out from participating companies at <a href="http://www.aboutads.info/consumers/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/consumers/</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing Preferences</h2>
                <p>
                  Abhivorn Technologies respects your email marketing choices. If you wish to stop receiving promotional email messages from Abhivorn Technologies, you can easily unsubscribe by clicking the link provided at the bottom of each promotional email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security Measures</h2>
                <p>
                  Abhivorn Technologies safeguards PII with robust and appropriate physical, electronic, and procedural security measures. For instance, sections of this Site that collect sensitive PII are protected by industry-standard Secure Socket Layer (SSL) encryption. To benefit from SSL, your browser must support encryption (available in Internet Explorer 3.0+, all Mozilla Firefox versions, and all Google Chrome versions).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to External Sites</h2>
                <p>
                  This Site may include links to third-party websites that we believe may offer relevant information. Please note that the policies and procedures detailed in this Privacy Policy do not extend to these external sites. We encourage you to review the data collection, security, and distribution policies of those third-party sites directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Revisions to This Privacy Policy</h2>
                <p>
                  Abhivorn Technologies may update this Privacy Policy periodically. When changes are made, for your convenience, the updated policy will be posted on this page. We recommend reviewing this Privacy Policy regularly for any modifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us for More Information</h2>
                <p className="mb-4">
                  Should you have any questions or concerns regarding this Privacy Policy, please reach out to us at <a href="mailto:hello@abhivorn.com" className="text-blue-600 hover:underline">hello@abhivorn.com</a> or at:
                </p>
                <address className="not-italic text-gray-600">
                  <strong>Abhivorn Technologies Pvt Ltd</strong><br />
                  Cyber Towers - HITEC City<br />
                  Hyderabad, Telangana 500081
                </address>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
