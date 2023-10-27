import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Hero from "../page-components/home/Hero";
import ScrollVideo from "../page-components/home/ScrollVideo";
import Customers from "../page-components/home/Customers";
import Ownership from "../page-components/home/Ownership";
import Features from "../page-components/home/Features";

const Home = ({ playbackConst }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <ScrollVideo playbackConst={playbackConst} />
      <Customers />
      <div className="border-b border-solid border-gray-900 max-w-xxx mx-auto my-6" />
      <Ownership />
      <Features />
      <div
        id="diamond-gradient"
        className="absolute bg-no-repeat"
        style={{ backgroundImage: "url('/images/diamond-gradient.svg')" }}
      />
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
  const { playbackConst } = query;

  return { playbackConst };
};

export default Home;
