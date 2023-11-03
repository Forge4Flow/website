import React from "react";
import Meta from "../../components/Meta";
import Image from "next/image";

const Terms = () => {
  return (
    <div>
      <Meta title="Terms and Conditions" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- TOS --> */}
        <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={1519}
              height={773}
              priority
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="container">
            <h1 className="font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white">
              Terms and Conditions
            </h1>
            <h1 className="font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white">
              Forge4Flow DAO LLC
            </h1>
            <div className="article-content mx-auto max-w-[48.125rem]">
              <p className="text-base">Last Updated: Oct 18th, 2023</p>
              <p>
                Welcome to Forge4Flow DAO LLC. Please read these Terms and
                Conditions ("Terms") carefully before using the forge4flow.com
                website (the "Service") operated by Forge4Flow DAO LLC, a
                Wyoming DAO LLC.
              </p>

              <h2 className="text-base">Acceptance of Terms</h2>
              <p>
                By accessing or using the Service, you agree to be bound by
                these Terms. If you disagree with any part of the terms, then
                you may not access the Service.
              </p>

              <h2>Use of the Service</h2>
              <p>
                The content provided on our website is for informational
                purposes only. While we strive for accuracy, members and the
                community of the DAO contribute to this content, and we cannot
                guarantee its completeness or accuracy at all times.
              </p>

              <h2>Restrictions</h2>
              <p>You may not:</p>
              <ul>
                <li>
                  Republish material from our website without prior consensus or
                  approval from the DAO.
                </li>
                <li>Sell, rent, or sub-license material from the website.</li>
                <li>
                  Reproduce, duplicate, or copy material from the website for
                  commercial purposes without proper acknowledgment or
                  agreement.
                </li>
                <li>
                  Redistribute content from this website, unless content is
                  explicitly allowed for redistribution.
                </li>
              </ul>

              <h2>Analytics and Monitoring</h2>
              <p>
                We gather standard analytics to understand user behavior and to
                improve the website experience. This data may include IP
                addresses, browser types, visit times, and other standard web
                analytics data. We do not gather personally identifiable
                information.
              </p>

              <h2>No Warranties</h2>
              <p>
                This website is provided "as is" without any representations or
                warranties. Given the decentralized nature of a DAO, the
                responsibility for content accuracy, relevancy, or completeness
                is distributed among its members. We make no guarantees on
                behalf of individual member contributions.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Forge4Flow DAO LLC, its members, contributors,
                or affiliates be liable for any indirect, incidental, special,
                consequential, or punitive damages, including without
                limitation, loss of profits, data, use, or goodwill.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the State of Wyoming, without regard to its conflict
                of law provisions.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                Terms can be modified or replaced with the consensus or approval
                mechanism as set by the DAO's governing rules or smart contract
                protocols. Changes made without following the DAO's governance
                process will be deemed invalid.
              </p>

              <h2>Contact Us</h2>
              <p>
                To raise questions or issues regarding these Terms or any other
                matter, engage with our DAO community through our Discord Server
                or reach out to our registered agent in Wyoming.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- end TOS --> */}
      </div>
    </div>
  );
};

export default Terms;
