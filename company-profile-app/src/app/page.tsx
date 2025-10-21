// app/page.tsx
export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#DBE2EF]">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 md:py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Solusi Teknologi untuk <span className="text-[#00000]">Masa Depan</span>
                </h1>
                <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10">
                    Kami membantu bisnis berkembang dengan layanan pengembangan web, mobile, dan sistem informasi terbaik di Indonesia.
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
                        Hubungi Kami
                    </a>
                </div>
            </section>

            {/* Fitur */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-[#112D4E] mb-12">Layanan Kami</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Web Development", desc: "Website responsif & performa tinggi" },
                        { title: "Mobile App", desc: "Aplikasi Android & iOS modern" },
                        { title: "UI/UX Design", desc: "Desain pengalaman pengguna terbaik" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-[#112D4E] mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}