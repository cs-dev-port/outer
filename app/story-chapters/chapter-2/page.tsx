import PasswordGate from "@/components/PasswordGate";
import MessageBox from "@/components/MessageBox";
import MapModal from "@/components/MapModal";
import { chapterPasswords } from "@/lib/passwords";

const MAP_SRC =
  "https://www.google.com/maps/d/u/0/embed?mid=1HCJsZzaO1M5UYI9U8JGqcqKwVdHVuak&ehbc=2E312F";

export default function Chapter2Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-2"]}
      placeholder="enter launch code"
    >
      <div
        className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url(https://umnqakvebzkowroi.public.blob.vercel-storage.com/Images/chapter%202%20bg.jpg)",
        }}
      >
        <div className="text-center text-2xl font-bold uppercase text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl">
          CHAPTER 2
          <br />
          BRITTLE HOLLOW & HOLLOW'S LANTERN
        </div>
        <div className="flex flex-col items-center gap-6">
          <MessageBox message="These ancient Nomai ruins may reveal the proper route to Giant's Deep. We'll remain here from the 21st through the 22nd, gathering data, and depart on the 23rd." />
          <MapModal label="Map" src={MAP_SRC} />
        </div>
      </div>
    </PasswordGate>
  );
}
