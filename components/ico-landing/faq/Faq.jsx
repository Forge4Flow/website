/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const itemContent = [
  {
    id: 1,
    title: "Auth4Flow and Alerts4Flow",
    descriptions: ` Our inaugural tools tailored for the Flow developers, designed to streamline the development process and boost innovation.`,
  },
  {
    id: 2,
    title: "Community at the Helm",
    descriptions: ` Every token holder is not just a participant but a co-owner. Experience authentic decentralization with our governance model.`,
  },
  {
    id: 3,
    title: "Shared Prosperity",
    descriptions: ` As Forge4Flow grows, so do its stakeholders. Experience shared success through mechanisms like profit distributions.`,
  },
  {
    id: 4,
    title: "Developer-Centric Tokenomics",
    descriptions: ` With a max supply of 500 million tokens, we ensure developers have a meaningful stake in the project, fostering ownership and innovation.`,
  },
  {
    id: 5,
    title: "Token Utility",
    descriptions: ` Forge4Flow tokens simplify the developer experience. From accessing our cloud-hosted suite to shaping the platform's future through feedback, your token is the key.`,
  },
];

const FaqAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {itemContent.map((item) => (
        <Accordion
          className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600 h-auto"
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
            onClick={() => handleOpen(item.id)}
          >
            {item.title}
          </AccordionHeader>
          <div className="hidden-style">
            <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
              {item.descriptions}
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default FaqAccordion;
