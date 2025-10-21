// app/page.tsx
import FadeInWhenVisible from "./components/FadeInWhenVisible";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#DBE2EF]">
      {/* Hero Section — TIDAK perlu animasi */}
      <FadeInWhenVisible>
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#112D4E] mb-6">
          Solusi Teknologi untuk{" "}
          <span className="text-[#3F72AF]">ASTRAtech</span>
        </h1>
        <p className="text-lg md:text-xl text-[#112D4E] max-w-2xl mx-auto mb-10">
          Kami membuat pengelolaan Rapat & Penomoran surat, agar mempermudah persiapan Rapat
          Serta mengirim Surat.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/services"
            className="bg-[#3F72AF] hover:bg-[#112D4E] text-white font-semibold px-8 py-3 rounded-lg transition shadow-lg"
          >
            Lihat Portofolio
          </a>
          <a
            href="/contact"
            className="border-2 border-[#3F72AF] text-[#3F72AF] hover:bg-[#DBE2EF] font-semibold px-8 py-3 rounded-lg transition"
          >
            Hubungi Kami Aja!
          </a>
        </div>
      </section>  
      </FadeInWhenVisible>
      
      {/* Fitur — DIBERI ANIMASI */}
      <section className="container mx-auto px-4 py-16">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold text-center text-[#112D4E] mb-12">
            Kami Ngapain Aja
          </h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pengelolaan Rapat",
              desc: "Memudahkan penjadwalan & dokumentasi rapat",
            },
            { title: "Peminjaman Ruangan", desc: "Memudahkan peminjaman ruangan" },
            {
              title: "Penomoran Surat",
              desc: "Otomatisasi penomoran surat resmi",
            },
          ].map((item, i) => (
            <FadeInWhenVisible key={i}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#112D4E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>
    </div>
  );
}
