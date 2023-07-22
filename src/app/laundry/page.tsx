import { Metadata } from "next"
import LaundryPage from "./laundryPage"

export const metadata: Metadata = {
  title: 'Прачечная',
  description: 'Стиральная комната',
}

export default function Laundry() {
    return (<LaundryPage />)
}