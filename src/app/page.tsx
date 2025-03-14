import Image from "next/image";
import HeroImage1 from '@/assets/images/hero.png'
import NavBar from "@/components/NavBar";


export default function Home() {
  return (

    <div className="flex justify-center text-white basefont-medium">
      <NavBar />
      <main className="flex relative w-dvw h-dvh pt-96 pl-18">
        <Image
          className="absolute -z-10 object-cover h-full w-full top-0 left-0 fade-mask"
          src={HeroImage1}
          alt=""
        />
        <div className="text-8xl basefont-bold pt-10 w-4/6">
          AI driven agriculture for a sustainable tomorrow
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
