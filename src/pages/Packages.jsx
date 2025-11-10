const packages = [
  { id: 1, name: "Darjeeling Delight", price: "₹12,500", days: "4 Nights / 5 Days" },
  { id: 2, name: "Goa Getaway", price: "₹18,900", days: "5 Nights / 6 Days" },
  { id: 3, name: "Sikkim Serenity", price: "₹15,000", days: "5 Nights / 6 Days" },
];

export default function Packages() {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Popular Packages</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">{pkg.name}</h3>
            <p className="text-gray-500">{pkg.days}</p>
            <p className="text-gray-800 font-semibold mt-3">{pkg.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}