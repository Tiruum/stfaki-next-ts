import LoadingLaundryGrid from "@/components/LaundryCalendar/LoadingLaundryGrid";

export default function Loading() {
    return (
      <>
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-52 rounded-full bg-gray-800"></div>
          <div className="mt-4 h-5 w-96 rounded-full bg-gray-800"></div>
        </div>
        <div className="mx-auto mb-2 w-fit animate-pulse overflow-auto rounded-xl bg-white px-6 py-1 shadow-sm shadow-gray-200/50 dark:bg-gray-700 dark:shadow-black/50">
          <div className="h-8 w-36 bg-white px-3 py-1 text-gray-900 focus-visible:outline-none dark:bg-gray-700 dark:text-white"></div>
        </div>
        <LoadingLaundryGrid />
      </>
    )
}