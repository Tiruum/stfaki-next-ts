export default function Loading() {
    return (
    <>
        <div className="mb-8 animate-pulse">
            <div className="h-8 w-52 rounded-full bg-gray-800"></div>
            <div className="mt-4 h-5 w-96 rounded-full bg-gray-800"></div>
            <div className="mt-2 w-64 h-5 rounded-full bg-gray-800"></div>
        </div>
        <div className="rounded-xl animate-pulse bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto w-full h-96"></div>
    </>
    )
}