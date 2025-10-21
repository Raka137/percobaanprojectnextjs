"use client";

import { useState } from "react";
import { handleFormSubmit } from "./actions";

type FormErrors = {
    nama?: string;
    email?: string;
    pesan?: string;
};

export default function ContactForm() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [pesan, setPesan] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const validateForm = () => {
        const newErrors: FormErrors = {};
        let isValid = true;
        if (!nama.trim()) {
            newErrors.nama = "*Nama Lengkap wajib diisi.";
            isValid = false;
        }
        if (!email.trim()) {
            newErrors.email = "*Email wajib diisi.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "*Format email tidak valid (cth: contoh@email.com).";
            isValid = false;
        }
        if (!pesan.trim()) {
            newErrors.pesan = "*Pesan wajib diisi.";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitMessage("");
        if (!validateForm()) {
            setSubmitMessage("Periksa kembali isian Anda, masih ada yang tidak sesuai.");
            return;
        }
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("namaLengkap", nama);
        formData.append("email", email);
        formData.append("pesan", pesan);
        try {
            const response = await handleFormSubmit(formData);
            if (response.success) {
                setSubmitMessage(response.message);
                setNama("");
                setEmail("");
                setPesan("");
                setErrors({});
            } else {
                setSubmitMessage(response.message || "Terjadi kesalahan.");
            }
        } catch (error) {
            setSubmitMessage("Gagal terhubung ke server. Coba lagi nanti.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <div className="flex items-baseline mb-1">
                    <label htmlFor="namaLengkap" className="text-sm font-medium text-gray-700">
                        Nama Lengkap
                    </label>
                    {errors.nama && <span className="text-red-600 text-sm font-medium ml-2">{errors.nama}</span>}
                </div>
                <input
                    id="namaLengkap"
                    name="namaLengkap"
                    type="text"
                    className={`w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 ${errors.nama ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#3F72AF]'}`}
                    placeholder="Nama Anda"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
            </div>

            <div>
                <div className="flex items-baseline mb-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    {errors.email && <span className="text-red-600 text-sm font-medium ml-2">{errors.email}</span>}
                </div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={`w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#3F72AF]'}`}
                    placeholder="anda@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <div className="flex items-baseline mb-1">
                    <label htmlFor="pesan" className="text-sm font-medium text-gray-700">
                        Detail Keluhan/Pesan Anda
                    </label>
                    {errors.pesan && <span className="text-red-600 text-sm font-medium ml-2">{errors.pesan}</span>}
                </div>
                <textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    className={`w-full px-4 text-gray-600 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.pesan ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#3F72AF]'}`}
                    placeholder="Tulis pesan Anda di sini..."
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                ></textarea>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full bg-[#3F72AF] hover:bg-[#112D4E] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sedang Mengirim..." : "Kirim Pesan"}
                </button>
            </div>

            {submitMessage && (
                <p className={`text-center font-medium ${errors.nama || errors.email || errors.pesan || submitMessage.includes('Gagal') ? 'text-red-600' : 'text-green-600'}`}>
                    {submitMessage}
                </p>
            )}
        </form>
    );
}