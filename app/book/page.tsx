import Link from "next/link";
import BookForm from "../../components/BookForm";

export const metadata = {
  title: "Book a RocketSingh in Chennai | RocketSingh",
  description: "Book RocketSingh on demand home services in Chennai, India.",
  keywords: "RocketSingh booking Chennai, book home service, RocketSingh",
};

export default function BookPage() {
  return (
    <div className="flex flex-col bg-gray-50 max-md:overflow-hidden md:min-h-screen pb-0 md:pb-10">
      <div className="shrink-0 px-4 sm:px-6 py-3 md:py-4 text-center">
        <div className="text-sm flex items-center justify-center text-gray-500 mb-1 md:mb-2">
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
          <span className="font-semibold text-gray-800">Book</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Book a RocketSingh in Chennai
        </h1>
      </div>

      <div className="w-full max-md:px-0 md:px-3 sm:px-6 max-md:py-0 md:py-6">
        <div className="w-full max-w-full md:max-w-4xl lg:max-w-5xl mx-auto rounded-none md:rounded-xl overflow-hidden md:shadow-md bg-[#F8F9FB]">
          <BookForm />
        </div>
      </div>
    </div>
  );
}
