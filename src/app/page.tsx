import { BackgroundGradientAnimation } from "@/components/bg-animation";
import { Card } from "@/components/card";
import { MaskContainer } from "@/components/mask-effect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BackgroundGradientAnimation />
      {/* <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          }
          className="h-[40rem] border rounded-md"
        >
          The first rule of <span className="text-red-500">MRR Club</span> is
          you do not talk about MRR Club. The second rule of MRR Club is you DO
          NOT talk about <span className="text-red-500">MRR Club</span>.
        </MaskContainer>
      </div> */}
    </>
  );
}
