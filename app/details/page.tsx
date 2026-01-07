// app/details/page.tsx
import { DetailsSections } from "../components/DetailsSections";

export const metadata = {
  title: "Skylight Safety — Details",
  description:
    "Specs, what’s included, QR tracking workflow, and compliance documentation details for Skylight Safety.",
};

export default function DetailsPage() {
  return <DetailsSections />;
}
