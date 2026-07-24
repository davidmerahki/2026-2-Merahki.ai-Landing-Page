import { buildMetadata } from "@/lib/seo/metadata";
import DavidGonzalezProfile from "@/components/profile/DavidGonzalezProfile";

export const metadata = buildMetadata("david-gonzalez", "es");

export default function DavidGonzalezPageES() {
  return <DavidGonzalezProfile locale="es" />;
}
