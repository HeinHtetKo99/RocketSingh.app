import Link from "next/link";
import BookForm from "../../components/BookForm";

export const metadata = {
  title: "Book a RocketSingh in Chennai | RocketSingh",
  description: "Book RocketSingh on demand home services in Chennai, India.",
  keywords: "RocketSingh booking Chennai, book home service, RocketSingh",
};

export default function BookPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen pb-24 md:pb-10">
      <div className="shrink-0 px-4 py-3 text-center border-b border-gray-100">
        <div className="text-sm flex items-center justify-center text-gray-500">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700">Book</span>
        </div>
      </div>

      <div className="w-full px-4 py-6 sm:px-6">
        <BookForm />
      </div>
    </div>
  );
}
