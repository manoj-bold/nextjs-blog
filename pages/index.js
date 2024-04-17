import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a new NextJS project and deploy it on Vercel.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a new NextJS project and deploy it on Vercel.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a new NextJS project and deploy it on Vercel.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a new NextJS project and deploy it on Vercel.",
      date: "2022-02-10",
    },
  ];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
