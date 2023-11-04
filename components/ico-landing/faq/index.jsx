import Image from "next/image";
import Faq from "./Faq";

const index = () => {
  return (
    <section className="bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Empowering Decentralization in Development
          </h2>
          <p className="text-lg dark:text-jacarta-300 text-jacarta-800">
            Move away from the centralized powers and join our community-centric
            vision.
          </p>
        </div>
        <div className="lg:flex lg:flex-nowrap">
          <div className="lg:w-[59%]">
            <figure className="relative mb-8 overflow-hidden rounded-3xl">
              <Image
                width={639}
                height={546}
                src="/images/ico-landing/ico_landing_promo.png"
                alt="icon landing"
              />
            </figure>
          </div>
          <div className="lg:w-[41%] lg:pl-24">
            <p className="mt-10 mb-5 dark:text-jacarta-300">
              Forge4Flow is charting a revolutionary path in the Flow ecosystem.
              By introducing robust developer tools and championing true
              decentralization, we&apos;re fostering trust, collaboration, and
              innovation.
            </p>
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
