import ActionButtons from "./action-buttons";

export function VSCode() {
  return (
    <div className="h-[400px] w-[640px] mt-20">
      <div className="items-center bg-[#3c3c3c] rounded-t-md py-2 flex flex-row round">
        <ActionButtons exit={() => {}} fullSize={() => {}} />
      </div>
      <div className="w-full h-full bg-black">
        <iframe
          className="w-full h-full bg-black"
          title="github"
          src="https://github1s.com/elmersson/macos_2"
        />
      </div>
    </div>
  );
}
