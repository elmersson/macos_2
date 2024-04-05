import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div
      className="rounded-md px-3 py-4 w-[100%] h-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 dark:bg-slate-800/5 shadow-md flex flex-row items-center space-x-2 border-slate-400/40 border"
      onClick={handleClick}
    >
      <div className="h-7 w-7 bg-apple-blue-100 rounded-full flex justify-center items-center">
        {theme === "dark" ? (
          <IoMdMoon style={{ color: "white" }} />
        ) : (
          <IoSunny style={{ color: "black" }} />
        )}
      </div>
      <div>
        <p className="text-xs font-semibold">
          {theme === "dark" ? "Dark" : "Light"}
        </p>
      </div>
    </div>
  );
}
