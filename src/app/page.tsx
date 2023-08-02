import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Главная | stfaki.ru',
  description: 'Главная страница сайта студенческих сервисов ФАКТ',
}

export default function Home() {
  return (
    <>
    <div className="mb-8">
      <h1 className="font-semibold text-3xl">Привет 👋</h1>
      <p className="text-base mt-2">Это сайт студенческих сервисов ФАКТ.<br />👈 тут ты можешь записаться в стирку или общественные комнаты.</p>
    </div>
    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
      Some text here
    </div>
  </>
  )
}