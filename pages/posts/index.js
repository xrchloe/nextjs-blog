import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useEffect } from "react";

export default function Posts({ allPostsData }) {
  // read file content from https://rushable.io/tencent16231687294739671384.txt
  const readTextFile = async (file) => {
    console.log(file);
    const res = await fetch(file);
    const text = await res.text();
    console.log(text);
    return { text };
  };

  useEffect(() => {
    readTextFile("https://rushable.io/tencent16231687294739671384.txt");
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

{
  /* <h4>Loved by thousands of restaurants</h4>
<div className="customer-logos">
  <CustomerLogo name="sapporo" />
  <CustomerLogo name="fuji" />
  <CustomerLogo name="jellyfish" />
  <CustomerLogo name="uptown" />
  <CustomerLogo name="fuji" />
</div>
<section className="max-w-xxx m-auto">
  <div className="flex">
    <div className="global-icon">
      <Icon name="global" />
    </div>
    <h3 className="text-7xl">Own your online experience.</h3>
    <div className="ownership-subtext">
      <p>
        Rushable brings together everything that’s required to stand out
        online.
      </p>
      <div>
        <Button rounded>Read more</Button>
        <p>Start building your website today</p>
      </div>
    </div>
  </div>
</section> */
}
