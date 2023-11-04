import React from "react";
import Meta from "../../components/Meta";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div>
      <Meta title="Privacy Policy" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Privacy Policy --> */}
        <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              src="/images/gradient_light.jpg"
              layout="fill"
              alt="gradient"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="container">
            <h1 className="font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white mb-8">
              Privacy Policy
            </h1>
            <div className="article-content mx-auto max-w-[48.125rem]">
              <p className="text-base mb-4">Last Updated: November 3rd, 2023</p>
              <p className="mb-4">
                This Privacy Policy describes how Forge4Flow DAO LLC, a Wyoming
                DAO LLC, collects, uses, and discloses your personal information
                when you use our website located at https://forge4flow.com.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Information We Collect
              </h2>
              <h3 className="text-lg mb-2">Non-Personal Data</h3>
              <p className="mb-4">
                When you visit our website, we may collect non-personal data
                such as IP addresses, browser type and version, time and date of
                your visit, pages you view, and the website that referred you to
                us.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                How We Use Information
              </h2>
              <p className="mb-4">
                We use the collected information to analyze the usage of our
                website, improve user experience, and ensure website security.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Cookies
              </h2>
              <p className="mb-4">
                Our website uses cookies to enhance user experience. By
                continuing to use our website, you consent to our use of
                cookies.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Third-Party Service Providers
              </h2>
              <p className="mb-4">
                We may employ third-party companies to facilitate our website,
                provide website-related services, or assist us in analyzing how
                our website is used. These third parties have access to your
                non-personal data solely to perform these tasks on our behalf.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Security
              </h2>
              <p className="mb-4">
                The security of your data is important to us, but remember that
                no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Links To Other Sites
              </h2>
              <p className="mb-4">
                Our website may contain links to other sites that are not
                operated by us. We have no control over and assume no
                responsibility for the content, privacy policies, or practices
                of any third-party sites.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Changes To This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>

              <h2 className="font-display text-jacarta-700 text-xl font-medium dark:text-white mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us through our Discord server or our registered agent in
                Wyoming at 32 N Gould St, Sheridan, WY 82801.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- end Privacy Policy --> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
