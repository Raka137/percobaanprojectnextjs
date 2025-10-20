// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TechNova - Company Profile",
    description: "Solusi teknologi terbaik untuk bisnis Anda",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Navbar */}
                <nav className="bg-[#3F72AF] text-white shadow-md">
                    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                        <div className="text-xl font-bold">TechNova</div>
                        <div className="hidden md:flex space-x-6">
                            <a href="/" className="hover:text-[#DBE2EF] transition">Home</a>
                            <a href="/about" className="hover:text-[#DBE2EF] transition">About</a>
                            <a href="/services" className="hover:text-[#DBE2EF] transition">Portofolio</a>
                            <a href="/contact" className="hover:text-[#DBE2EF] transition">Contact</a>
                        </div>
                        <button className="md:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Konten Halaman */}
                <main className="bg-[#DBE2EF] min-h-screen">{children}</main>

                {/* Footer */}
                <footer className="bg-[#3F72AF] text-white py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-lg font-semibold">TechNova Solutions</p>
                        <p className="mt-2 text-gray-300">
                            Jl. Teknologi No. 123, Jakarta, Indonesia<br />
                            Email: info@technova.id | Phone: +62 21 1234 5678
                        </p>
                        <p className="mt-4 text-sm text-gray-400">
                            © {new Date().getFullYear()} TechNova. All rights reserved.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}