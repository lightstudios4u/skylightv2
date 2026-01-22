import { FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

export function RiskFraming() {
  return (
    <section style={{ backgroundColor: "#fc8337" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header - Full Width */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-black">
            Skylights are fall-through hazards
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            The risk is real.<br></br> The fix shouldn&lsquo;t be complicated.
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/90">
            Commercial skylights create dangerous openings on rooftops where
            crews do critical work. Unprotected glazing becomes a high-risk
            fall-through zone—serious injury, liability exposure, citations,
            delays.
          </p>
        </div>

        {/* Two Cards - Horizontally Aligned */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div
            className="relative overflow-hidden rounded-3xl shadow-sm"
            style={{ minHeight: "400px" }}
          >
            <Image
              src="/brokenskylight.png"
              alt="Commercial roof work"
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-3xl bg-[#3D2C28] p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-white">
              {[
                "Catastrophic injury potential from fall-through incidents",
                "Compliance exposure (citations/fines) from inadequate protection",
                "Documentation gaps when inspectors arrive",
                "Project delays when safety equipment isn't ready",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-0.5 text-orange-500">●</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-white">
                Every unprotected skylight is a liability waiting to happen.
              </p>
              <p className="mt-1 text-xs text-white/80">
                Proper protection costs a fraction of what one incident costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
