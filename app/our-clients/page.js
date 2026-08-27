import RawSection from "@/components/RawSection";
import { clientsContent } from "@/content/clients";

export const metadata = {
  title: "Our Clients",
  description:
    "850+ clients across steel wire and rolled products — testimonials and the customer base Aarti Steel serves.",
};

export default function OurClientsPage() {
  return <RawSection html={clientsContent} />;
}
