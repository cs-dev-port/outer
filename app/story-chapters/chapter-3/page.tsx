import PasswordGate from "@/components/PasswordGate";
import MessageBox from "@/components/MessageBox";
import { chapterPasswords } from "@/lib/passwords";

export default function Chapter3Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-3"]}
      placeholder="code = sai_ _ _"
      hint="location name"
    >
      <div
        className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url(https://umnqakvebzkowroi.public.blob.vercel-storage.com/Images/deep.jpg)",
        }}
      >
        <div className="flex flex-col items-center gap-8 bg-black px-10 py-8">
          <div className="text-center text-2xl font-bold uppercase text-[#ff7d25] sm:text-3xl md:text-4xl">
            CHAPTER 3
            <br />
            GIANTS DEEP & DARK BRAMBLE
          </div>
          <MessageBox message="From the 23rd through the 26th, we'll trek through the violent monsoons of Giant's Deep, searching for whatever secrets lie beneath its storms. If the Nomai records are correct, our path may eventually lead us toward Dark Bramble, where strange creatures and far worse things are said to lurk within the fog." />
        </div>
      </div>
    </PasswordGate>
  );
}
