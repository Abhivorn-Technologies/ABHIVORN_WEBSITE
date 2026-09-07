import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function TermsAndConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-primary-foreground/80">
              Please review the terms governing your use of our website and services.
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
              These Terms of Service (the "Terms") govern your access to and use of the website, products, and services (collectively, the "Services") provided by Abhivorn Technologies ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and any future amendments and additions to these Terms as published from time to time on the Site or through the Services. These Terms apply to all visitors, users, and others who access or use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time, at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Your Use of the Services</h2>
                <p>
                  You agree to use the Services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Services by any third party. You are solely responsible for any content you post or transmit through the Services. You must not transmit any content that is offensive, defamatory, or otherwise violates any laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p>
                  The Services and their original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Abhivorn Technologies and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States, India, and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Abhivorn Technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Links to Other Websites</h2>
                <p>
                  Our Services may contain links to third-party websites or services that are not owned or controlled by Abhivorn Technologies. Abhivorn Technologies has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Abhivorn Technologies shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
                <p>
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at <a href="mailto:hello@abhivorn.com" className="text-blue-600 hover:underline">hello@abhivorn.com</a> or at:
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
