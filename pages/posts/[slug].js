import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

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

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return {
    paths: getPostsFiles().map((postFile) => ({
      params: { slug: postFile.replace(/\.md$/, "") },
    })),
    fallback: false,
  };
}
