import RawSection from "@/components/RawSection";
import { contactContent } from "@/content/contact";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Aarti Steel for quotes, grade specifications and volume enquiries.",
};

export default function ContactPage() {
  return <RawSection html={contactContent} />;
}
