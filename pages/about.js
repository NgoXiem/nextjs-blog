import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          For most real-world projects, we recommend installing Tailwind as a
          PostCSS plugin. Most modern frameworks use PostCSS under the hood
          already, and there’s a good chance you’ve used or are currently using
          other PostCSS plugins like autoprefixer.
        </p>
      </div>
    </>
  );
}
