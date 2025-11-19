'use client';

export default function AboutSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background metálico con textura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#3d3d3d] to-[#1a1a1a]"></div>
      
      {/* Efecto metálico brillante */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.03) 2px,
          rgba(255,255,255,0.03) 4px
        )`
      }}></div>

      {/* Resplandor sutil naranja */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFB343]/5 via-transparent to-[#FFB343]/5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFB343]/20">
              <img 
                src="/roof-images/roof-repair.jpg" 
                alt="Professional Roofing Services"
                className="w-full h-full object-cover"
              />
              {/* Overlay con brillo metálico */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-[#FFB343]/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Professional Roofing <span className="text-[#FFB343]">Solutions</span>
              </h2>
              <div className="w-24 h-1 bg-[#FFB343] rounded-full"></div>
            </div>

            {/* Content paragraphs */}
            <div className="space-y-4 text-white/90 leading-relaxed text-base">
              <p className="text-lg">
                We provide various services, including <strong className="text-[#FFB343]">new roofing</strong>, maintenance, <strong className="text-[#FFB343]">roof replacement</strong>, or <strong className="text-[#FFB343]">repairs</strong>. Call today for an inquiry and a free <span className="text-[#FFB343] font-bold">roof estimate</span>. You get friendly local professional roofers with excellent solutions for all your roofing requirements.
              </p>
              
              <p className="text-white/80">
                Our professional roofers have years of experience in Austin roofing and can handle any roofing job. We are committed to all our customers. We look forward to providing you with the best quality roofing services at affordable prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}