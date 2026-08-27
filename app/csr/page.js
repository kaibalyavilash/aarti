import RawSection from "@/components/RawSection";
import { csrContent } from "@/content/csr";

export const metadata = {
  title: "EHS & CSR",
  description: "Environment, health, safety and community commitments at Aarti Steel.",
};

export default function CsrPage() {
  return <RawSection html={csrContent} />;
}
