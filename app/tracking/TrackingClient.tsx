"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Search,
  CheckCircle2,
  Truck,
  MapPin,
  Clock,
  ArrowLeft,
  Plane,
} from "lucide-react";

type TrackingStatus = "idle" | "loading" | "found" | "not_found";

interface TrackingStep {
  status: string;
  location: string;
  time: string;
  done: boolean;
}

const mockTracking: TrackingStep[] = [
  {
    status: "Paket Diterima",
    location: "Gudang Yogyakarta",
    time: "10 Agu 2024, 08:30",
    done: true,
  },
  {
    status: "Sedang Diproses",
    location: "Sortir Hub Yogyakarta",
    time: "10 Agu 2024, 11:00",
    done: true,
  },
  {
    status: "Dalam Perjalanan",
    location: "Dalam Transit ke Jakarta",
    time: "10 Agu 2024, 14:00",
    done: true,
  },
  {
    status: "Tiba di Tujuan",
    location: "Hub Jakarta Selatan",
    time: "11 Agu 2024, 06:00",
    done: false,
  },
  {
    status: "Sedang Dikirim",
    location: "Kurir menuju alamat tujuan",
    time: "–",
    done: false,
  },
  {
    status: "Terkirim",
    location: "Alamat Penerima",
    time: "–",
    done: false,
  },
];

export default function TrackingClient() {
  const [resi, setResi] = useState("");
  const [status, setStatus] = useState<TrackingStatus>("idle");

  const handleTrack = () => {
    if (!resi.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus(resi.length > 4 ? "found" : "not_found");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
          <div className="h-5 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <Package className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">RBC Expedition</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Lacak Pengiriman
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Pantau Status Paket Anda
          </h1>
          <p className="text-gray-500 mt-3">
            Masukkan nomor resi untuk melihat posisi terkini pengiriman Anda.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nomor Resi
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={resi}
              onChange={(e) => setResi(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              placeholder="Contoh: RBC2024081001"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <button
              onClick={handleTrack}
              disabled={status === "loading"}
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors disabled:opacity-60"
            >
              {status === "loading" ? (
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              Lacak
            </button>
          </div>
        </div>

        {/* Not Found */}
        {status === "not_found" && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
            <Package className="w-12 h-12 text-red-300 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-1">Resi Tidak Ditemukan</h3>
            <p className="text-gray-500 text-sm">
              Pastikan nomor resi yang Anda masukkan benar, atau hubungi customer
              service kami.
            </p>
          </div>
        )}

        {/* Found */}
        {status === "found" && (
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">
                    Nomor Resi
                  </p>
                  <p className="font-extrabold text-gray-900 text-lg">{resi}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  Dalam Perjalanan
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Pengirim</p>
                  <p className="font-semibold text-gray-800 text-sm">
                    PT. Contoh Bisnis
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Layanan</p>
                  <div className="flex items-center gap-1.5">
                    <Plane className="w-4 h-4 text-primary" />
                    <p className="font-semibold text-gray-800 text-sm">
                      Ekspedisi Udara
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Estimasi Tiba</p>
                  <p className="font-semibold text-gray-800 text-sm">
                    12 Agustus 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-6">Riwayat Pengiriman</h2>
              <ol className="relative space-y-6">
                {mockTracking.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    {/* Dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.done
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step.done ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Truck className="w-4 h-4" />
                        )}
                      </div>
                      {i < mockTracking.length - 1 && (
                        <div
                          className={`w-0.5 flex-1 mt-2 ${
                            step.done ? "bg-primary/30" : "bg-gray-100"
                          }`}
                          style={{ minHeight: 24 }}
                        />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-4">
                      <p
                        className={`font-bold text-sm ${
                          step.done ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {step.status}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {step.location}
                      </p>
                      {step.time !== "–" && (
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.time}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
