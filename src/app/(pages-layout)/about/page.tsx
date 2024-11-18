import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "About UpperLeap | Game Boosting Service Platform",
  description:
    "UpperLeap is a premier Game Boosting Service Platform, connecting clients with elite boosters to elevate your gaming experience.",
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <p className="text-xs font-bold mb-5 text-primary">
          {t("cms.lastUpdated")} Oct 8th, 2024
        </p>
        <h1 className="text-5xl font-bold text-foreground mb-4">
          {t("cms.aboutUs")}
        </h1>
        <p className="max-w-4xl mt-2 text-lg">
          {t("cms.aboutUsDescription")}
        </p>
      </div>

      <div className="mt-16 space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg">
            Founded in 2024, UpperLeap emerged as the go-to platform for gamers seeking to elevate their gameplay. We bridge the gap between ambitious players and elite boosters, creating a seamless ecosystem where skills meet opportunity. Our platform is more than just a service; it's a launchpad for gaming excellence.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            At UpperLeap, our mission is to empower gamers to reach new heights in their favorite games. We strive to provide a secure, efficient, and transparent boosting experience that not only elevates rankings but also enhances skills and gaming knowledge.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a gaming world where every player has the opportunity to experience their full potential. UpperLeap aims to be the catalyst in this journey, fostering a community where passion meets expertise, and where every game is an opportunity for growth.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>To become the most trusted and efficient game boosting platform globally</li>
            <li>To continuously improve and expand our services across multiple game titles</li>
            <li>To foster a community of skilled boosters and passionate gamers</li>
            <li>To promote fair play and ethical boosting practices in the gaming industry</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose UpperLeap?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Elite Boosters</h3>
            <p>Our rigorous selection process ensures you're paired with top-tier talent in your game of choice.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p>Your account safety is our priority. We employ state-of-the-art security measures to protect your data.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
            <p>Track your boost in real-time and communicate directly with your booster for a seamless experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p>Gain insights and tips from pro players to improve your own gameplay long after the boost.</p>
          </div>
        </div>
      </div>
    </section>
  );
}