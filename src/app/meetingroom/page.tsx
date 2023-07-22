import { Metadata } from "next";
import MeetingRoomPage from "./meetingroomPage";

export const metadata: Metadata = {
  title: 'Переговорная',
  description: 'Комната для созвонов'
}

export default function MeetingRoom() {
    return (<MeetingRoomPage />)
}