import { FaMagnifyingGlass } from "react-icons/fa6";

export function InputFunction({ value, keyDown }) {
  return (
    <div className="relative">
      <input
        className="rounded-[48px] w-[567px] ml-[40px] py-[20px] pl-[50px] mt-[40px] text-black outline-none   absolute z-40  "
        type="text"
        placeholder="Search"
        onChange={value}
        onKeyDown={keyDown}
      />
      <span>
        <FaMagnifyingGlass className="text-[black] opacity-[20%] top-[60px] left-[55px] size-6  absolute z-50" />
      </span>
    </div>
  );
}
