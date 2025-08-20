export default function AmortizationPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Calculadora de préstamos</h1>
      <iframe
        src="https://aleossa.com/amortization"
        className="w-full h-[800px] border rounded-md"
        loading="lazy"
      />
    </main>
  );
}