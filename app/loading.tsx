import { Loader2, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-100 w-full flex flex-col items-center justify-center p-6 space-y-4 animate-in fade-in duration-300">
      {/* Animated Icon Container */}
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Glow */}
        <div className="absolute w-16 h-16 rounded-3xl bg-emerald-500/20 animate-ping opacity-75" />
        
        {/* Main Spinner Card */}
        <div className="relative p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-100 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
          <Sparkles className="w-3.5 h-3.5 text-emerald-500 absolute top-2 right-2 animate-bounce" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-1">
        <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">
          Fetching Data...
        </h3>
        <p className="text-xs text-slate-400 font-medium animate-pulse">
          Please wait a moment while we load your page
        </p>
      </div>
    </div>
  );
}