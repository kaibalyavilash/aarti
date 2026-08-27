import RawSection from "@/components/RawSection";
import { infrastructureContent } from "@/content/infrastructure";

export const metadata = {
  title: "Infrastructure",
  description:
    "Captive power, dual-plant logistics and in-house testing facilities at Aarti Steel.",
};

export default function InfrastructurePage() {
  return <RawSection html={infrastructureContent} />;
}
