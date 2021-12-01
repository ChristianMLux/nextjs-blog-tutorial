import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { Experiment, Variant } from "@tstmkrs/nextjs-ab-test";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>A/B Test</title>
      </Head>
      <Experiment name="Experiment-test">
        <Variant name="A">
          <h1>A/B Test</h1>
        </Variant>
        <Variant name="B">
          <h1>B/A Test</h1>
        </Variant>
      </Experiment>

      <h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h2>
    </Layout>
  );
}
