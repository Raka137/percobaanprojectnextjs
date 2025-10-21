// app/contact/actions.ts
"use server";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function handleFormSubmit(formData: FormData) {
    await sleep(1500);

    const data = {
        nama: formData.get("namaLengkap"),
        email: formData.get("email"),
        pesan: formData.get("pesan"),
    };

    console.log("====================================");
    console.log("     PESAN BARU DITERIMA     ");
    console.log("====================================");
    console.log(`Nama : ${data.nama}`);
    console.log(`Email: ${data.email}`);
    console.log(`Pesan: ${data.pesan}`);
    console.log("====================================");

    return {
        success: true,
        message: "Pesan Anda berhasil terkirim! Kami akan segera merespons."
    };
}