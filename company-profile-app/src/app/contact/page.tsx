// app/contact/page.tsx
export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 bg-[#F9F7F7] min-h-screen">
            <h1 className="text-4xl font-bold text-center text-[#112D4E] mb-8">Hubungi Kami</h1>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <form className="space-y-6">
                    <div>
                        <label className="block text-[#112D4E] mb-2">Nama Lengkap</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF]"
                            placeholder="Masukkan nama Anda"
                        />
                    </div>
                    <div>
                        <label className="block text-[#112D4E] mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF]"
                            placeholder="contoh@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-[#112D4E] mb-2">Pesan</label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF]"
                            placeholder="Tulis pesan Anda di sini..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#3F72AF] hover:bg-[#112D4E] text-white font-semibold py-3 rounded-lg transition"
                    >
                        Kirim Pesan
                    </button>
                </form>
                <div className="mt-8 text-center text-[#112D4E]">
                    <p>Atau hubungi langsung:</p>
                    <p className="font-medium">info@technova.id</p>
                    <p className="font-medium">+62 21 1234 5678</p>
                </div>
            </div>
        </div>
    );
}