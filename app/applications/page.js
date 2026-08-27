import RawSection from "@/components/RawSection";
import { applicationsContent } from "@/content/applications";

export const metadata = {
  title: "Applications",
  description:
    "Where Aarti Steel's grades are used: auto components, defence, oil & gas, railways, bearings and more.",
};

export default function ApplicationsPage() {
  return <RawSection html={applicationsContent} />;
}
