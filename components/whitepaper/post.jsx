/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Post = ({ whitepaperData }) => {
  console.log(whitepaperData);
  return (
    <div>
      {/* <!-- Post --> */}
      <section className="relative py-16 md:py-24">
        <div className="container" key={whitepaperData.id}>
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <h1 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-5xl">
              {whitepaperData.title}
            </h1>
          </header>

          {/* <!-- Article --> */}
          <article>
            <div className="lg:flex">
              {/* <!-- Content --> */}
              <div className="article-content lg:w-screen">
                <div
                  dangerouslySetInnerHTML={{
                    __html: whitepaperData.contentHtml,
                  }}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* <!-- end post --> */}
    </div>
  );
};

export default Post;
