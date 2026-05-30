export const metadata = {
  title: "Partnership | RocketSingh",
  description: "Partner with RocketSingh — professional cleaning services partnership opportunities in Nepal.",
  keywords: "cleaning partnership Nepal, RocketSingh partner",
};

export default function PartnershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="px-4 py-4 text-center">
        <div className="text-sm flex items-center justify-center text-gray-500 mb-2">
          Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-semibold text-gray-800">Become a Partner</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Partnership Opportunity with RocketSingh
        </h1>
      </div>

      <div className="w-full flex justify-center py-6">
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://airtable.com/embed/appleRo8p3WECYrSW/pag40VXRMes62pV2d/form"
            className="w-full"
            style={{ height: "1300px", border: "none" }}
            title="Partnership Form"
          />
        </div>
      </div>
    </div>
  );
}
