import Image from "next/image";
import banner from "@/assets/bg-main-mobile.png";

export default function Home() {
  return (
    <main className="w-full lg:grid-cols-2 grid">
      <div className="w-full">
        <Image
          className="w-full object-cover h-60"
          src={banner}
          loading="lazy"
          alt="banner"
        />
      </div>
      <div className="w-full px-4">
        <form>
          <div>
            <label
              htmlFor=""
              className="text-sm text-very-dark-violet tracking-widest"
            >
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Applessed"
              className="text-base border rounded-md px-4 py-2 block w-full"
            />
          </div>
          <div>
            <label htmlFor="">CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
          </div>

          <div>
            <label htmlFor="">EXP. DATE (MM/YY) </label>
            <div></div>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
          </div>

          <button className="text-white w-full bg-very-dark-violet rounded-md px-4 py-2">
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}
