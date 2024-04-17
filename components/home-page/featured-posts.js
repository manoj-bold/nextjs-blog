import Link from "next/link";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts() {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <ul>
        <li>
          <Link href="/posts/a-new-beginning">
            <h3>A New Beginning</h3>
            <p>Starting something new is always exciting!</p>
          </Link>
        </li>
        <li>
          <Link href="/posts/the-time-is-now">
            <h3>The Time is Now</h3>
            <p>Preparing for the big journey ahead.</p>
          </Link>
        </li>
        <li>
          <Link href="/posts/what-you-need-to-know-about-css-variables">
            <h3>What You Need to Know About CSS Variables</h3>
            <p>Let's have a closer look at CSS variables.</p>
          </Link>
        </li>
        <li>
          <Link href="/posts/next-js-features-you-need-to-know">
            <h3>Next.js Features You Need to Know</h3>
            <p>Learn about the most important Next.js features!</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
