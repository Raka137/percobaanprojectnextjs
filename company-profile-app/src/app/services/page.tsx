'use client';

import { useEffect, useState } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      client: "TokoOnline.id",
      desc: "Sistem jual beli online dengan 10.000+ pengguna aktif.",
      img: "/ecommerce.jpg",
      link: "#",
    },
    {
      title: "Aplikasi Inventory",
      client: "Distribusi Jaya",
      desc: "Manajemen stok real-time untuk 5 cabang gudang.",
      img: "/inventory.jpg",
      link: "#",
    },
    {
      title: "Website Perusahaan",
      client: "PT Maju Bersama",
      desc: "Landing page corporate dengan integrasi CRM.",
      img: "/corporate.jpg",
      link: "#",
    },
    {
      title: "Mobile App Kesehatan",
      client: "SehatApp",
      desc: "Aplikasi booking dokter dan telekonsultasi.",
      img: "/healthapp.jpg",
      link: "#",
    },
        {
      title: "Aplikasi Apotek Online",
      client: "SehatApp",
      desc: "Aplikasi pembelian obat khusus pengguna Mobile App Kesehatan.",
      img: "/healthapp.jpg",
      link: "#",
    },
        {
      title: "Website Peminjaman Kamera",
      client: "PT VCapture",
      desc: "Aplikasi booking kamera dan aksesoris kamera secara online.",
      img: "/kamera.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F7] text-[#112D4E] px-4 py-16">
      {/* Intro Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Halo User! Saya Admin TechNova</h1>
        <p className="text-[#3F72AF] max-w-xl mx-auto">
          Sebuah Team developer yang berfokus pada web & aplikasi modern. Berikut
          beberapa project yang pernah saya kerjakan.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, i) => (
          <div
            key={i}
             data-aos="fade-up" className="bg-white p-6 rounded-xl shadow-lg border border-[#DBE2EF] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-[#3F72AF] font-medium">{item.client}</p>
            <p className="mt-2 text-gray-600">{item.desc}</p>
            <a
              href={item.link}
              className="mt-4 inline-block bg-[#112D4E] text-[#F9F7F7] px-4 py-2 rounded-md hover:bg-[#3F72AF] transition-colors"
            >
              Lihat Detail
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
