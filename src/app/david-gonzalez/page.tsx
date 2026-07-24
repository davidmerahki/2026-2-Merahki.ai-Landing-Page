import { buildMetadata } from "@/lib/seo/metadata";
import DavidGonzalezProfile from "@/components/profile/DavidGonzalezProfile";

export const metadata = buildMetadata("david-gonzalez", "en");

export default function DavidGonzalezPage() {
  return <DavidGonzalezProfile locale="en" />;
}
