// app/services/page.tsx
export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-16 bg-[#F9F7F7] min-h-screen">
            <h1 className="text-4xl font-bold text-center text-[#112D4E] mb-12">Portofolio Kami</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: "E-Commerce Platform", client: "TokoOnline.id", desc: "Sistem jual beli online dengan 10.000+ pengguna aktif." },
                    { title: "Aplikasi Inventory", client: "Distribusi Jaya", desc: "Manajemen stok real-time untuk 5 cabang gudang." },
                    { title: "Website Perusahaan", client: "PT Maju Bersama", desc: "Landing page corporate dengan integrasi CRM." },
                    { title: "Mobile App Kesehatan", client: "SehatApp", desc: "Aplikasi booking dokter dan telekonsultasi." },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-[#DBE2EF]">
                        <h3 className="text-xl font-bold text-[#112D4E]">{item.title}</h3>
                        <p className="text-[#3F72AF] font-medium">{item.client}</p>
                        <p className="mt-2 text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}