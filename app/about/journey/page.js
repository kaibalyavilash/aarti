import RawSection from "@/components/RawSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import { renderBanner } from "@/lib/banner";

export const metadata = {
  title: "Our Journey",
  description: "Aarti Steel's journey from 1979 founding to today's Cuttack plant and scrap-first roadmap.",
};

const banner = renderBanner({
  parentLabel: "About Us",
  parentHref: "/about",
  title: "Our Journey",
  subtitle: "A timeline of milestones, growth and where we're headed next.",
  image: "https://images.unsplash.com/photo-1763771420303-0f11ccf613d1?w=1600&q=70&auto=format&fit=crop",
});

export default function JourneyPage() {
  return (
    <>
      <RawSection html={banner} />
      <JourneyTimeline />
    </>
  );
}
