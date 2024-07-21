"use client";
import { EnumForm, InterfaceForm } from "@/types";
import { ChangeEvent, useState } from "react";
import { formatCardNumber, formatName, formatNumber } from "@/utils";


const initForm: InterfaceForm = {} as InterfaceForm;
Object.values(EnumForm).forEach(
  (item) => (initForm[item] = { error: null, value: "" })
);

export const FormCard = () => {
  const [form, setForm] = useState<InterfaceForm>(initForm);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    format?: (value: string) => string
  ) => {
    const name = e.target.name;
    const value = format ? format(e.target.value) : e.target.value;
    setForm({ ...form, [name]: { value, error: null } });
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
            onChange={(event) => handleChange(event, formatName)}
            tabIndex={1}
            name={EnumForm.CardHolderName}
            value={form[EnumForm.CardHolderName].value}
            required
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
            type="text"
            id="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
            name={EnumForm.CardNumber}
            onChange={(event) => handleChange(event, formatCardNumber)}
            value={form[EnumForm.CardNumber].value}
            maxLength={19}
            required
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
                onChange={(event) => handleChange(event, formatNumber)}
                maxLength={2}
                name={EnumForm.ExpDateMonth}
                value={form[EnumForm.ExpDateMonth].value}
                required
              />
              <input
                type="text"
                id="exp-date"
                placeholder="YY"
                className="text-base border rounded-md px-4 py-2 block w-full mt-2 text-gray-900 outline-very-dark-violet"
                onChange={(event) => handleChange(event, formatNumber)}
                maxLength={2}
                name={EnumForm.ExpDateYear}
                value={form[EnumForm.ExpDateYear].value}
                required
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
              onChange={(event) => handleChange(event, formatNumber)}
              maxLength={3}
              required
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
