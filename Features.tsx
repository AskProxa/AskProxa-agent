const features = [
  "Private AI Inference",
  "Hardware Attestation",
  "Signed Responses",
  "Solana Verification",
  "Receipt Explorer",
  "Enterprise Security"
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item) => (
          <div
            key={item}
            className="border rounded-xl p-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
