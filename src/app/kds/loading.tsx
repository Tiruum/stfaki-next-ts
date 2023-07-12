import LoadingEventGrid from "@/components/EventCalendar/LoadingEventCalendar";

export default function Loading() {
  return (
    <>
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-52 rounded-full bg-gray-800"></div>
        <div className="mt-4 h-5 w-96 rounded-full bg-gray-800"></div>
        <div className="mt-2 h-8 w-24 rounded-full bg-gray-800"></div>
      </div>

      <LoadingEventGrid />
    </>
  )
}