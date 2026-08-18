export default function MessageBox({ message }: { message: string }) {
  return (
    <div
      className="max-w-md border border-[#ff7d25] bg-black px-6 py-4 text-center text-[#ff7d25]"
      style={{ whiteSpace: "pre-line" }}
    >
      {message}
    </div>
  );
}
