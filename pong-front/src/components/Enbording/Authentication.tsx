import ftLogo from "../../assets/42.svg"

export default function Authentication() {
  return (
    <div className="border bg-black text-white p-3 rounded-2xl w-72 h-14">
      <button
        type="button"
        className="flex gap-3 items-center justify-center w-full h-full"
      >
        <img src={ftLogo}></img>
        network authentication
      </button>
    </div>
  );
}