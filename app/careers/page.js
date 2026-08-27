import RawSection from "@/components/RawSection";
import { careersContent } from "@/content/careers";

export const metadata = {
  title: "Careers",
  description:
    "Join Aarti Steel: current openings, how to apply, and what it's like working across our Cuttack, Odisha steel plant.",
};

export default function CareersPage() {
  return <RawSection html={careersContent} />;
}
