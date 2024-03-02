"use client";
import Image from "next/image";
import ProfileImage from "@/assets/images/ProfileImage.png";
import useTime from "@/hooks/useTime";
import getFullFormatDate from "@/lib/date/getFullFormatDate";
import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const time = useTime();
  const timeObject = getFullFormatDate(time);

  const inputAnimationControls = useAnimation();

  const password = "RasmusRocks!!!";

  const handlePasswordValidation = () => {
    if (inputValue === password) {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
      inputAnimationControls.start({ x: [-10, 10, -10, 10, 0] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePasswordValidation();
    }
  };

  const handleClickOnScreen = () => {
    setShowInput(true);

    if (inputRef) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  };

  return (
    <div className="h-full flex flex-col" onClick={handleClickOnScreen}>
      <div className="flex flex-col items-center mt-10">
        <span className="text-[2rem] font-bold text-teal-100 mix-blend-overlay text-shadow">
          {timeObject.dayOfWeek}, {timeObject.dayOfMonth} {timeObject.month}
        </span>
        <span className="text-[8rem] font-black text-teal-100 mix-blend-overlay -mt-8 text-shadow">
          {timeObject.time}
        </span>
      </div>
      <div className="flex flex-col items-center mt-[55vh]">
        <div className="w-20 h-20 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
          <Image
            src={ProfileImage}
            alt="account image"
            className="rounded-full drop-shadow"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {!showInput ? (
          <p>Rasmus Elmersson</p>
        ) : (
          <motion.div
            className={`flex items-center w-32 h-6 px-2 rounded-2xl bg-sky-200/30 backdrop-blur-sm mt-2 drop-shadow p-1 ${
              isPasswordCorrect ? "" : "shake"
            }`}
            animate={inputAnimationControls}
          >
            <input
              ref={inputRef}
              placeholder="Enter Password"
              onBlur={handlePasswordValidation}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="focus:none outline-none text-white bg-transparent placeholder-sky-50/80 text-shadow text-xs"
            />
          </motion.div>
        )}

        {isPasswordCorrect ? (
          <p className="text-white text-shadow-lg mt-1 text-sm">
            Enter Password
          </p>
        ) : (
          <p className="text-white/80 text-shadow-lg mt-1 text-sm">
            Test {password}
          </p>
        )}
      </div>
    </div>
  );
}
