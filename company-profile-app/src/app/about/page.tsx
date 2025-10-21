// app/about/page.tsx
export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 bg-[#F9F7F7] min-h-screen">
            {/* Card Anggota Kelompok */}
            <h2 className="text-3xl font-semibold text-center text-[#112D4E] mb-8">Anggota Kelompok 5</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-[#112D4E] mb-2">Rakhsanda KPK</h3>
                    <p className="text-[#3F72AF] text-sm">0920240059</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-[#112D4E] mb-2">Vicky Prasetya</h3>
                    <p className="text-[#3F72AF] text-sm">0920240050</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-[#112D4E] mb-2">M Izzatul Islam</h3>
                    <p className="text-[#3F72AF] text-sm">0920240054</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-[#112D4E] mb-2">M Dzaky Zahran</h3>
                    <p className="text-[#3F72AF] text-sm">0920240046</p>
                </div>
            </div>

            {/* Konten Tentang Kami */}
            <h1 className="text-4xl font-bold text-center text-[#112D4E] mb-8">Tentang Kami</h1>
            <div className="max-w-3xl mx-auto text-[#112D4E] space-y-6 bg-white p-8 rounded-xl shadow-md">
                <p>
                    Kami adalah tim pengembang dari Politeknik Astra yang berfokus pada pengembangan solusi digital
                    untuk mendukung kebutuhan manajemen di lingkungan kampus ASTRAtech.
                </p>
                <p>
                    Melalui proyek ini, kami merancang sistem terpadu untuk <b>pengelolaan rapat</b>, <b>peminjaman ruangan</b>,
                    serta <b>penomoran surat</b> agar proses administrasi menjadi lebih efisien, transparan, dan terdokumentasi dengan baik.
                </p>
                <p>
                    Dengan memanfaatkan teknologi berbasis web, kami ingin menghadirkan platform yang modern, mudah digunakan,
                    dan dapat membantu setiap divisi dalam melaksanakan kegiatan secara lebih produktif.
                </p>
                <p>
                    Kami percaya bahwa digitalisasi proses kampus bukan hanya sekadar tren, tetapi langkah nyata menuju efisiensi kerja
                    dan peningkatan kualitas layanan administrasi di era modern.
                </p>

            </div>
        </div>
    );
}
