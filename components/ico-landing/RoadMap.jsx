import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const RoadMap = () => {
  const [itemsTabs, setItemsTabs] = useState(1);

  const roadMapList = [
    {
      id: 1,
      tabMenu: "Phase 1",
    },
    {
      id: 2,
      tabMenu: "Phase 2",
    },
    {
      id: 3,
      tabMenu: "Phase 3",
    },
    {
      id: 4,
      tabMenu: "Phase 4",
    },
    {
      id: 5,
      tabMenu: "Phase 5",
    },
    {
      id: 6,
      tabMenu: "Phase 6",
    },
    {
      id: 7,
      tabMenu: "Phase 7",
    },
    {
      id: 8,
      tabMenu: "Phase 8",
    },
  ];
  const roadMapContent = [
    {
      id: 1,
      title: "Beta Rollout (v0.1.0) & Docs",
      text: "Launching our foundational phase, we present a secure and stable MVP with Auth4Flow & Alerts4Flow, setting the stage for robust authentication and alerting services. To empower our users, we're providing comprehensive API documentation and a detailed getting started guide, ensuring a smooth onboarding experience. Despite potential risks like security vulnerabilities, incomplete documentation, and API instability, our focus remains on delivering a seamless and secure initial product.",
    },
    {
      id: 2,
      title: "DAO Launch",
      text: "The next phase of our roadmap is the launch of our decentralized autonomous organization (DAO), establishing decentralized funding control. We will unveil the Forge4Flow Token and its release plan aimed at nurturing developer grants and community events. Additionally, we will release our DAO Whitepaper and conduct an air-drop of 50 million tokens to incentivize key developers, alongside the introduction of a community engagement DApp. Our path forward will navigate regulatory landscapes and technical intricacies to foster community engagement and adoption.",
    },
    {
      id: 3,
      title: "SDK Debut",
      text: "Our commitment to developer empowerment continues with the release of beta versions of server and client SDKs, ensuring seamless integration across various platforms such as JavaScript, NodeJS, React, NextJS, Swift, Kotlin, and Go. Each SDK will be paired with meticulous documentation to assist developers in creating exceptional applications, while we proactively address potential compatibility issues and developer expectations.",
    },
    {
      id: 4,
      title: "Forge4Flow Manager",
      text: "This phase introduces a Docker/Container-based management solution complete with an integrated Admin Dashboard, revolutionizing the management of instances, users, groups, and events. We are dedicated to providing a detailed user guide, facilitating ease of management while addressing potential integration and stability challenges and ensuring a user-friendly dashboard experience.",
    },
    {
      id: 5,
      title: "Walletless Magic",
      text: "We are set to transform the onboarding experience with the development of walletless solutions, complete with account linking capabilities. Documenting best practices for secure integrations, this phase prioritizes user security and ease of use. We are vigilant about potential technical challenges and usability factors, ready to address them head-on to enhance user adoption.",
    },
    {
      id: 6,
      title: "Security Deep Dive",
      text: "In our unwavering commitment to security, we will undertake comprehensive pentesting across all platform components, engage in external security audits, and promptly address any vulnerabilities. This phase culminates in the release of an in-depth security report, signifying our dedication to maintaining the highest security standards and building trust within our community.",
    },
    {
      id: 7,
      title: "Final Polish & Tweaks (v1.0)",
      text: "In our unwavering commitment to security, we will undertake comprehensive pentesting across all platform components, engage in external security audits, and promptly address any vulnerabilities. This phase culminates in the release of an in-depth security report, signifying our dedication to maintaining the highest security standards and building trust within our community.",
    },
    {
      id: 8,
      title: "Cloud Launch & Profit Sharing",
      text: "In Phase 8, we're excited to launch the cloud-hosted SaaS version of the Forge4Flow suite, offering users an effortless, maintenance-free experience with our tools. Alongside this deployment, we're initiating a profit-sharing feature for our token holders. This integration aligns the success of Forge4Flow with tangible benefits for our community, directly connecting the suite's performance with rewards for our supporters.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60"
      style={{
        backgroundImage: 'url("/images/ico-landing/ico_landing_roadmap.jpg")',
      }}
    >
      <div className="container relative z-10">
        <h2 className="mb-6 font-display text-3xl text-white">Roadmap</h2>
        <p className="mb-12 max-w-xl text-lg text-jacarta-300">
          This timeline details our funding and development goals. Connect our
          AI to your exchange account and invest crypto automatically.
        </p>

        <Tabs>
          <div className="flex">
            <TabList className="nav nav-tabs w-1/3 space-y-9 self-start border-l-2 border-jacarta-200 py-2 pl-2 md:pl-8">
              {roadMapList.map((item) => (
                <Tab
                  className="nav-item"
                  key={item.id}
                  onClick={() => setItemsTabs(item.id)}
                >
                  <button
                    className={
                      itemsTabs === item.id
                        ? "active nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                        : "nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                    }
                  >
                    <span className="px-2 font-display text-lg font-medium md:text-2xl">
                      {item.tabMenu}
                    </span>
                  </button>
                </Tab>
              ))}
            </TabList>
            {/* End Tablist  */}

            <div className="tab-content w-full pl-4 md:mt-16 md:w-2/4">
              {roadMapContent.map((item) => (
                <TabPanel key={item.id}>
                  <h3 className="mb-6 font-display text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white">{item.text}</p>
                </TabPanel>
              ))}
            </div>
            {/* End tab-content */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default RoadMap;
