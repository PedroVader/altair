'use client';

export default function AboutSection() {
  return (
    <section className="bg-[#F6F6F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/roof-images/roof-repair.jpg" 
                alt="Roofing"
                className="w-full h-full object-cover"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-[#232323] leading-relaxed text-base">
              <p>
                We provide various services, including <strong className="text-[#232323]">new roofing</strong>, maintenance, <strong className="text-[#232323]">roof replacement</strong>, or <strong className="text-[#232323]">repairs</strong>. Call today for an inquiry and a free <span className="text-[#0CEBD2] font-semibold">roof estimate</span>. You get friendly local professional roofers with excellent solutions for all your roofing requirements.
              </p>
              
              <p>
                Our professional roofers have years of experience in Austin roofing and can handle any roofing job. We are committed to all our customers. We look forward to providing you with the best quality roofing services at affordable prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}