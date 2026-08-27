import RawSection from "@/components/RawSection";
import { productsContent } from "@/content/products";

export const metadata = {
  title: "Products",
  description:
    "Special steel, iron making, ferro alloy, round bars, wire rods, oxygen and fly ash by-products from Aarti Steel.",
};

export default function ProductsPage() {
  return <RawSection html={productsContent} />;
}
