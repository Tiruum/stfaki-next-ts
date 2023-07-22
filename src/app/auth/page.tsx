import { Metadata } from "next";
import AuthPage from "./authPage";

export const metadata: Metadata = {
  title: 'Войти',
  description: 'Вход в учетную запись'
}

export default function Auth() {
    return (<AuthPage />)
}