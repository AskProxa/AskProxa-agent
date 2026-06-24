export default function VerificationCard() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto border rounded-xl p-8">
        <h2 className="text-3xl font-bold">
          Verify Response
        </h2>

        <div className="mt-6 space-y-3">
          <p>✓ Hardware Attested</p>
          <p>✓ Signed By Secure Chip</p>
          <p>✓ Anchored To Solana</p>
          <p>✓ Publicly Verifiable</p>
        </div>
      </div>
    </section>
  );
}
