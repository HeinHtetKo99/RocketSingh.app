import Link from "next/link";

export const metadata = {
  title: "Book a Cleaning Service | RocketSingh",
  description: "Book professional cleaning services in Chennai, India with RocketSingh.",
  keywords: "cleaning services India, book cleaning, RocketSingh",
};

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="px-4 py-4 text-center">
        <div className="text-sm flex items-center justify-center text-gray-500 mb-2">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
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
          <span className="font-semibold text-gray-800">Book a Service</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Book Cleaning Service in India
        </h1>
      </div>

      <div className="w-full flex justify-center py-6">
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://airtable.com/embed/appleRo8p3WECYrSW/pag3G6i7wWYeFJSlu/form"
            className="w-full airtable-embed"
            height="1333"
            style={{ border: "0px solid #F8F9FB", background: "#F8F9FB" }}
            title="Book Cleaning Service"
          />
        </div>
      </div>
    </div>
  );
}
