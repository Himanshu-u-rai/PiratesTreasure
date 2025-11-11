import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DMCA() {
  return (
    <>
      <Head>
        <title>DMCA Policy - Pirates Treasure</title>
        <meta
          name="description"
          content="DMCA copyright policy and takedown procedures for Pirates Treasure."
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            DMCA Copyright Policy
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Last Updated: November 11, 2025
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
            <p>
              Pirates Treasure respects the intellectual property rights of
              others and expects our users to do the same. It is our policy to
              respond to clear notices of alleged copyright infringement that
              comply with the Digital Millennium Copyright Act (DMCA).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Important Notice</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold">
                Pirates Treasure is a directory service only. We do NOT host,
                store, or distribute any copyrighted content.
              </p>
              <p className="text-sm mt-2">
                All links on our website direct to third-party websites that
                host their own content. We have no control over the content on
                these external sites.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              If You Are a Copyright Owner
            </h2>
            <p>
              If you believe that a link on our directory points to content that
              infringes your copyright, please note that we do not control the
              third-party content. However, if you believe a link itself
              violates copyright law, you may submit a DMCA takedown notice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              DMCA Takedown Procedure
            </h2>
            <p>
              To file a DMCA takedown notice, you must provide a written
              communication that includes:
            </p>
            <ol className="space-y-2">
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the copyright owner
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed
              </li>
              <li>
                Identification of the material claimed to be infringing
                (specific URL on our site)
              </li>
              <li>
                Your contact information (address, telephone number, and email
                address)
              </li>
              <li>
                A statement that you have a good faith belief that use of the
                material is not authorized
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and under penalty of perjury, that you are authorized
                to act on behalf of the copyright owner
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              How to Submit a Notice
            </h2>
            <p>Send your DMCA notice to:</p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <p className="font-mono text-sm">
                <strong>DMCA Agent:</strong> Pirates Treasure
                <br />
                <strong>Email:</strong> dmca@piratestreasure.dev
                <br />
                <strong>Subject Line:</strong> DMCA Takedown Request
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Response Time</h2>
            <p>
              We will review and respond to valid DMCA notices within 5-7
              business days. If a notice is valid, we will remove the offending
              link from our directory.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Counter-Notification
            </h2>
            <p>
              If you believe that material you posted was removed or access to
              it was disabled by mistake or misidentification, you may file a
              counter-notification with us by providing:
            </p>
            <ul className="space-y-2">
              <li>Your physical or electronic signature</li>
              <li>
                Identification of the material and its location before removal
              </li>
              <li>
                A statement under penalty of perjury that the material was
                removed by mistake
              </li>
              <li>Your name, address, and telephone number</li>
              <li>
                A statement consenting to jurisdiction of the federal district
                court
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Repeat Infringers</h2>
            <p>
              In appropriate circumstances, we will terminate the accounts or
              access of users who are repeat infringers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This policy applies only to links and information on
              piratestreasure.dev. For content hosted on third-party websites,
              copyright owners must contact those websites directly. We cannot
              remove content we do not host or control.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
