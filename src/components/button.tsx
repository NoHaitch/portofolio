export default function Button({ title }: { title: string }) {
  return (
    <button
      className="text-xl font-medium p-2 text-white bg-[#00926F] hover:bg-[#00825E] active:bg-[#00825E] outline-none rounded-2xl w-48">
      {title}
    </button>
  );
}
