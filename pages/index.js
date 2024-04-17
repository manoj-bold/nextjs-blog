import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <FeaturedPosts />
    </div>
  );
}
