import check from '../../assets/icon-complete.svg'
import Image from 'next/image'

export const CompleteState = () => {
  return (
    <div>
        <div className="size-10 grid place-items-center bg-red-500">
            <Image src={check} alt="check" /> 
        </div>
      <h2 className="text-3xl font-bold text-very-dark-violet">THANK YOU!</h2>
      <p className="text-gray-500 text-sm">We've added your card details</p>
      <button className="text-white w-full bg-very-dark-violet rounded-md px-4 py-3 mt-6">Continue</button>
    </div>
  );
};
