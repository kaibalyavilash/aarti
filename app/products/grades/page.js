import RawSection from "@/components/RawSection";
import { gradesContent } from "@/content/grades";

export const metadata = {
  title: "Grade Range",
  description: "Illustrative carbon and alloy steel grades produced by Aarti Steel, Cuttack.",
};

export default function GradesPage() {
  return <RawSection html={gradesContent} />;
}
