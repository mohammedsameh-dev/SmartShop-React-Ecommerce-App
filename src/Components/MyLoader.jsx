import { LoaderIndex } from "../Store";

export default function MyLoader() {
  const { value } = LoaderIndex();

  if (!value) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading<span className="animate-bounce">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-300">.</span>
        </p>
        <div className="w-64 h-6 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-600 to-blue-400 animate-[progress_3s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0; }
          80% { width: 100%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
