import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";

export default function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export async function getStaticProps() {
  const post = {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    content: "# This is a first post",
  };

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "getting-started-with-nextjs" } },
      { params: { slug: "getting-started-with-react" } },
    ],
    fallback: false,
  };
}
