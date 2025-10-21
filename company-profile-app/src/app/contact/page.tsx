// app/contact/page.tsx
"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    
    return (
        <div className="bg-[#F9F7F7] min-h-screen py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
                        Hubungi Kami
                    </h1>
                </div>

                {!isFormVisible ? (
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto p-8 md:p-12 animate-fade-in">
                        <h2 className="text-3xl font-semibold text-[#112D4E] mb-6">
                            Selamat Datang di Pusat Bantuan
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                            Kami di sini untuk membantu. Sebelum mengirim pesan, mungkin Anda bisa menemukan jawaban
                            lebih cepat di halaman <a href="#" className="text-[#3F72AF] hover:underline font-medium">Pertanyaan Umum (FAQ)</a> kami.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                            Anda juga bisa menghubungi kami langsung melalui email di <a href="mailto:info@technova.id" className="text-[#3F72AF] hover:underline font-medium">info@technova.id</a> atau
                            telepon di <a href="tel:+622112345678" className="text-[#3F72AF] hover:underline font-medium">+62 21 1234 5678</a>.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg mt-10">
                            <h3 className="text-xl font-semibold text-[#112D4E] mb-4">
                                Punya Keluhan atau Masalah Teknis?
                            </h3>
                            <p className="text-gray-600 mb-5">
                                Jika Anda mengalami masalah teknis atau memiliki keluhan yang perlu ditangani
                                secara spesifik, silakan gunakan formulir khusus kami.
                            </p>

                            {/* Tombol Trigger */}
                            <button
                                onClick={() => setIsFormVisible(true)}
                                className="w-full md:w-auto bg-[#3F72AF] hover:bg-[#112D4E] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                            >
                                Buka Formulir Keluhan
                            </button>
                        </div>
                    </div>

                ) : (
                    
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-fade-in">

                        {/* --- Kolom Kiri: Form --- */}
                        <div className="p-8 md:p-12">

                            {/* Tombol Kembali */}
                            <button
                                onClick={() => setIsFormVisible(false)}
                                className="text-sm font-medium text-[#3F72AF] hover:text-[#112D4E] hover:underline mb-5 flex items-center"
                            >
                                <span className="mr-1">&larr;</span>
                                Kembali ke Info
                            </button>

                            <h2 className="text-2xl font-semibold text-[#112D4E] mb-6">
                                Formulir Keluhan & Pertanyaan
                            </h2>

                            {/* !!! DI SINI KITA PANGGIL KOMPONEN FORM-NYA !!!
                            Seluruh <form>...</form> diganti jadi ini 
                            */}
                            <ContactForm />

                        </div>

                        {/* --- Kolom Kanan: Info Kontak --- */}
                        <div className="bg-[#112D4E] text-white p-8 md:p-12 rounded-b-xl md:rounded-l-none md:rounded-r-xl">
                            <h2 className="text-2xl font-semibold mb-6">
                                Informasi Kontak
                            </h2>
                            <p className="text-gray-300 mb-8">
                                Anda juga bisa menghubungi kami langsung melalui detail di bawah ini.
                            </p>

                            <div className="space-y-6">
                                {/* ... (Isi info kontak: email, telp, alamat) ... */}
                                <div className="flex items-start space-x-3">
                                    <span className="mt-1">📧</span>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <a href="mailto:info@technova.id" className="text-gray-300 hover:text-white hover:underline transition">
                                            info@technova.id
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="mt-1">📞</span>
                                    <div>
                                        <h3 className="font-semibold">Telepon</h3>
                                        <a href="tel:+622112345678" className="text-gray-300 hover:text-white hover:underline transition">
                                            +62 21 1234 5678
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="mt-1">📍</span>
                                    <div>
                                        <h3 className="font-semibold">Alamat Kantor</h3>
                                        <p className="text-gray-300">
                                            Jl. Teknologi No. 123, Jakarta, Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}