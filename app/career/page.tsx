export const metadata = {
  title: "Career | RocketSingh",
  description: "Join RocketSingh — career opportunities in professional cleaning services in Chennai, India.",
  keywords: "cleaning jobs India, RocketSingh career, Chennai cleaning jobs",
};

export default function CareerPage() {
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
          <span className="font-semibold text-gray-800">Career</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Vacancy in Cleaning Service
        </h1>
      </div>

      <div className="w-full flex justify-center py-6">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://airtable.com/embed/appleRo8p3WECYrSW/pagsQUmriTA6BL8PB/form"
            className="w-full"
            style={{ height: "1500px", border: "none" }}
            title="Cleaning Service Career Form"
          />
        </div>
      </div>
    </div>
  );
}
