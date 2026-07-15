export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-60 transition-opacity duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ebe9e1] blur-[120px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#fcfaf7] blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#e8e6df] blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}

