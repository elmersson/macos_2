import { useState } from 'react';
import { FaLock } from 'react-icons/fa6';
import { IoIosFingerPrint } from 'react-icons/io';

export function Passwords() {
  const [password, setPassword] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPassword(input);
    setDisplayValue('*'.repeat(input.length));
  };
  return (
    <div className="flex flex-col w-full h-full justify-center items-center space-y-4">
      <div className="mt-[50%] mb-20">
        <FaLock className="size-32 text-neutral-400/50 absolute" />
        <span className="flex items-center justify-center bg-neutral-800 rounded-full p-0.5 w-24 h-24 relative top-20 left-16">
          <IoIosFingerPrint className="size-24 text-red-500" />
        </span>
      </div>
      <span className="font-bold text-xl">Passwords Are Locked</span>
      <span className="w-[60%] text-center">
        Touch ID or enter the password for the user &quot;Rasmus Elmersson&quot;
        to unlock.
      </span>
      <div>
        <input
          type="text"
          className="w-full bg-transparent font-bold text-lg text-white border border-neutral-400/50 rounded text-center placeholder:text-neutral-400/50 mt-2 placeholder:font-normal placeholder:text-sm"
          placeholder="Enter password"
          value={displayValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
