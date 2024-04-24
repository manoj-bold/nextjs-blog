import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
      posts: DUMMY_POSTS,
    },
    revalidate: 600,
  };
}
