import type { Metadata } from "next";
import TrackingClient from "./TrackingClient";

export const metadata: Metadata = {
  title: "Lacak Pengiriman — RBC Expedition",
  description: "Lacak status pengiriman paket Anda secara real-time.",
};

export default function TrackingPage() {
  return <TrackingClient />;
}
