import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Главная | stfaki.ru',
  description: 'Главная страница сайта студенческих сервисов ФАКТ',
}

export default function Home() {
  return (
    <>
    <div className="mb-8">
      <h1 className="font-semibold text-3xl">Добро пожаловать 👋</h1>
      <p className="text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem
        Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of
        type and scrambled it to make a type specimen book.</p>
    </div>
    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
      Some text here
    </div>
  </>
  )
}
