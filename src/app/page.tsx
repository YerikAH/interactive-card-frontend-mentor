import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div></div>
      <div>
        <div>
          <label htmlFor="" className="font-spaceGrotesk">
            CARDHOLDER NAME
          </label>
          <input type="text" placeholder="e.g. Jane Applessed" />
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

        <button>Confirm</button>
      </div>
    </main>
  );
}
