// app/about/page.tsx
export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 bg-[#F9F7F7] min-h-screen">
            <h1 className="text-4xl font-bold text-center text-[#112D4E] mb-8">Tentang Kami</h1>
            <div className="max-w-3xl mx-auto text-[#112D4E] space-y-6 bg-white p-8 rounded-xl shadow-md">
                <p>
                    TechNova didirikan pada tahun 2020 dengan misi membantu UMKM dan perusahaan di Indonesia
                    mengadopsi teknologi digital secara efektif dan efisien.
                </p>
                <p>
                    Tim kami terdiri dari developer, desainer, dan konsultan IT berpengalaman yang telah
                    menyelesaikan lebih dari 50 proyek di berbagai industri.
                </p>
                <p>
                    Kami percaya bahwa teknologi bukan hanya alat, tapi partner strategis untuk pertumbuhan bisnis.
                </p>
            </div>
        </div>
    );
}