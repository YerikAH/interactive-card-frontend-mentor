export const FormCard = () => {
  return (
    <div className="w-full px-4 mt-16">
      <form>
        <div className="py-2">
          <label
            htmlFor="card-holder-name"
            className="text-xs text-very-dark-violet tracking-widest"
          >
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            id="card-holder-name"
            placeholder="e.g. Jane Applessed"
            className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
            tabIndex={1}
          />
        </div>

        <div className="py-2">
          <label
            htmlFor="card-number"
            className="text-xs text-very-dark-violet tracking-widest"
          >
            CARD NUMBER
          </label>
          <input
            type="number"
            id="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
          />
        </div>

        <div className="grid grid-cols-2 items-center gap-4 py-2">
          <div>
            <label
              htmlFor=""
              className="text-xs text-very-dark-violet tracking-widest"
            >
              EXP. DATE (MM/YY){" "}
            </label>
            <div className="flex items-center justify-start gap-2">
              <input
                type="number"
                id=""
                placeholder="MM"
                className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
              />
              <input
                type="number"
                id=""
                placeholder="YY"
                className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="card-number"
              className="text-xs text-very-dark-violet tracking-widest"
            >
              CARD NUMBER
            </label>
            <input
              type="number"
              id="card-number"
              placeholder="e.g. 123"
              className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
            />
          </div>
        </div>

        <button className="text-white w-full bg-very-dark-violet rounded-md px-4 py-3 mt-6">
          Confirm
        </button>
      </form>
    </div>
  );
};
