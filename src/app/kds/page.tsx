import { Metadata } from "next";
import KdsPage from "./kdsPage";

export const metadata: Metadata = {
  title: 'Комната для собраний',
  description: 'Комната для собраний'
}

export default function Kds() {
    return <KdsPage />
}