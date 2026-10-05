import ServicePage, { serviceMetadata } from "@/components/sections/ServicePage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("custom-software-development")!;

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
