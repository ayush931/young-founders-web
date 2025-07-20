import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseSection from "./components/CourseSection";
import EntrepreneurSection from "./components/EntrepreneurSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <>
      <Head>
        <title>Stack Skills</title>
        <meta
          name="description"
          content="Empowering young entrepreneurs with courses and resources."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <CourseSection />
          <EntrepreneurSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
