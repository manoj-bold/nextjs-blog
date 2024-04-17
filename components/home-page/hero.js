import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/manoj.jpg"
          alt="An image showing Manoj"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Manoj</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}
