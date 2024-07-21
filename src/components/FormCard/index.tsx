"use client";
import { ChangeEvent, useState } from "react";

interface InterfaceForm {
  "card-holder-name": {
    error: null | string;
    value: string;
  };
  Hola: {
    error: null | string;
    value: string;
  };
  "exp-date-month": {
    error: null | string;
    value: string;
  };
  "exp-date-year": {
    error: null | string;
    value: string;
  };
  "card-cvc": {
    error: null | string;
    value: string;
  };
}
enum EnumForm {
  CardHolderName = "card-holder-name",
  CardNumber = "Hola",
  ExpDateMonth = "exp-date-month",
  ExpDateYear = "exp-date-year",
  CardCvc = "card-cvc",
}
const initForm: InterfaceForm = {
  [EnumForm.CardHolderName]: {
    error: null,
    value: "",
  },
  [EnumForm.CardNumber]: {
    error: null,
    value: "",
  },
  [EnumForm.ExpDateMonth]: {
    error: null,
    value: "",
  },
  [EnumForm.ExpDateYear]: {
    error: null,
    value: "",
  },
  [EnumForm.CardCvc]: {
    error: null,
    value: "",
  },
};

export const FormCard = () => {
  const [form, setForm] = useState<InterfaceForm>(initForm);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: { value, error: null } });
    console.log(form);
  };
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
            onChange={(event) => handleChange(event)}
            tabIndex={1}
            name={EnumForm.CardHolderName}
            value={form[EnumForm.CardHolderName].value}
          />
        </div>

        <div className="py-2">
          <label
            htmlFor="Hola"
            className="text-xs text-very-dark-violet tracking-widest"
          >
            CARD NUMBER
          </label>
          <input
            type="text"
            id="Hola"
            placeholder="e.g. 1234 5678 9123 0000"
            className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
            name={EnumForm.CardNumber}
            value={form[EnumForm.CardNumber].value}
          />
        </div>

        <div className="grid grid-cols-2 items-center gap-4 py-2">
          <div>
            <label
              htmlFor="exp-date"
              className="text-xs text-very-dark-violet tracking-widest"
            >
              EXP. DATE (MM/YY){" "}
            </label>
            <div className="flex items-center justify-start gap-2">
              <input
                type="text"
                id="exp-date"
                placeholder="MM"
                className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
                name={EnumForm.ExpDateMonth}
                value={form[EnumForm.ExpDateMonth].value}
              />
              <input
                type="text"
                id="exp-date"
                placeholder="YY"
                className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
                name={EnumForm.ExpDateYear}
                value={form[EnumForm.ExpDateYear].value}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="cvc"
              className="text-xs text-very-dark-violet tracking-widest"
            >
              CVC{" "}
            </label>
            <input
              type="text"
              id="cvc"
              placeholder="e.g. 123"
              className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
              name={EnumForm.CardCvc}
              value={form[EnumForm.CardCvc].value}
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
