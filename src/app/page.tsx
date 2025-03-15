import Image from "next/image";
import HeroImage1 from '@/assets/images/hero.png'
import SectionImage1 from '@/assets/images/section1.png'
import SectionImage2 from '@/assets/images/section2.png'
import SectionImage3 from '@/assets/images/section3.png'
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Scroll from "@/components/Scroll";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {

  return (
    <Scroll>
      <div className="flex-col text-white basefont-medium">
        <NavBar />
        <main className="flex relative pt-96 pl-18 h-[54rem]">
          <Image
            className="absolute -z-10 top-0 left-0 fade-mask h-[54rem] object-cover"
            src={HeroImage1}
            alt=""
          />
          <div className="flex-col">
            <div className="text-8xl basefont-bold pt-10 w-4/6 mb-5">
              AI driven agriculture for a sustainable tomorrow
            </div>
            <div className="flex gap-5">
              <Button content="Get Started" variant="primary" />
              <Button variant="outline" content="Learn More" />
            </div>
          </div>
        </main>
        <section className="bg-white py-20 px-20">
          <div className="flex justify-between items-start">
            <p className="text-black text-5xl basefont-bold w-lg leading-15">Optimize Farm Management with AI</p>
            <div className="flex flex-col text-black text-xl w-xl gap-6">
              <p className="">Leverage the power of AI to track and manage your farm inventory efficiently. Our intelligent system helps you monitor stock levels, predict shortages, and streamline resource allocation for a more productive farming experience.
              </p>
              <p>Whether you run a small farm or a large agricultural operation, our AI tools adapt to your needs. Get real-time alerts on low stock, automate supply orders, and gain insights into seasonal trends—so you can focus on growing your business instead of worrying about inventory.</p>
            </div>
          </div>
          <div className="my-20 flex justify-between">
            <FeatureCard content="Manage Inventory" img={SectionImage1} />
            <FeatureCard content="Predict Resources" img={SectionImage2} />
            <FeatureCard content="Increase Profits" img={SectionImage3} />
          </div>
        </section>
        <footer className="bg-white text-black flex flex-col px-20 ">
          <div className="flex gap-96 border-t border-black/25 py-20">
            <div className="flex flex-col gap-5">
              <p className="text-2xl">About</p>
              <ul>
                <li>Our Mission and Why</li>
                <li>News</li>
                <li>Developers</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl">Features</p>
              <ul>
                <li>AI Assistant</li>
                <li>Resource Prediction</li>
                <li>Data Analysis</li>
                <li>Vision based Detection</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl">More</p>
              <ul>
                <li>Ask for help</li>
                <li>Become a Member</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex border-t border-black/25 text-sm py-8 text-black/70">
            © FutureCoders 2025. All rights reserved.
          </div>
        </footer>
      </div>
    </Scroll>
  )
}
