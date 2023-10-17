import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  console.log(typeof title, title);

  return (
    <div>
      <Head>
        <title>{title} || Forge4Flow</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Forge4Flow",
  keyword: "",
  desc: "",
};

export default Meta;
