"use client";

import { parseJwt } from "@/helpers/parseJwt";
import { authApi } from "@/redux/services/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useCookies } from "react-cookie";

export default function AuthPage() {

    const [ifLogin, setIfLogin] = useState(true)
    return (
        <>
            <div className="mb-8">
                <h1 className="font-semibold text-3xl">Авторизация</h1>
                <p className="text-base mt-2">Войдите в свою учетную запись, чтобы пользоваться сервисами Тройки!</p>
            </div>

            <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto p-6 lg:w-1/2 md:w-2/3 w-full">
                { ifLogin ? <LoginForm setIfLogin={setIfLogin} /> : <RegistrationForm setIfLogin={setIfLogin} /> }
            </div>
        </>
    )
}

const LoginForm = ({setIfLogin}: any) => {
    const [cookies, setCookie] = useCookies(['user'])
    const router = useRouter()
    
    const login = async () => {
        let email = (document.querySelector('#email') as HTMLInputElement)?.value
        let password = (document.querySelector('#password') as HTMLInputElement)?.value
        const result = await loginUser({email, password})
        if (email.split('@')[1] === 'phystech.edu') {
            if (JSON.parse(JSON.stringify(result)).error) {
                alert(JSON.parse(JSON.stringify(result)).error.data.message)
            } else {
                setCookie('user', parseJwt(JSON.parse(JSON.stringify(result)).data.token), {path: '/'})
                router.push('/')
            }
        } else {
            alert('Введите почту в домене @phystech.edu')
        }
    }
    const [loginUser, {}] = authApi.useLoginUserMutation()
    return (
        <form className="space-y-2" onSubmit={(e) => {e.preventDefault(); login()}}>
            <div>
                <label>Почта</label>
                <input type="email" id="email" name="email" className="inpt bg-gray-800 text-gray-50" placeholder="zemlya.vi@phystech.edu" />
            </div>
            <div>
                <label>Пароль</label>
                <input type="password" id="password" name="password" className="inpt bg-gray-800 text-gray-50" />
            </div>
            <div className="pt-2 w-full">
                <button type="submit" className="px-6 py-2 rounded border ml-auto">Войти</button>
            </div>
            <p className="text-sm font-light text-center">Нет учетной записи? <span className="cursor-pointer underline" onClick={() => setIfLogin(false)}>Зарегистрируйтесь!</span></p>
        </form>
    )
}

const RegistrationForm = ({setIfLogin}: any) => {
    const [cookies, setCookie] = useCookies(['user'])
    const router = useRouter()
    const register = async () => {
        let username = (document.querySelector('#username') as HTMLInputElement)?.value
        let email = (document.querySelector('#email') as HTMLInputElement)?.value
        let password = (document.querySelector('#password') as HTMLInputElement)?.value
        let repeatPassword = (document.querySelector('#repeatPassword') as HTMLInputElement)?.value
        if ((password === repeatPassword) && (!!username && !!password && !!email)) {
            const result = await registerUser({username, email, password})
            if (email.split('@')[1] === 'phystech.edu') {
                if (JSON.parse(JSON.stringify(result)).error) {
                    alert(JSON.parse(JSON.stringify(result)).error.data.message)
                } else {
                    setCookie('user', parseJwt(JSON.parse(JSON.stringify(result)).data.token), {path: '/'})
                    router.push('/')
                }
            } else {
                alert('Введите почту в домене @phystech.edu')
            }
        } else {
            alert('Пароли не совпадают')
        }
    }
    const [registerUser, {}] = authApi.useRegisterUserMutation()
    return (
        <form className="space-y-2" onSubmit={(e) => {e.preventDefault(); register()}}>
            <div>
                <label>Имя Фамилия</label>
                <input type="text" id="username" name="username" className="inpt bg-gray-800 text-gray-50" />
            </div>
            <div>
                <label>Почта</label>
                <input type="email" id="email" name="email" className="inpt bg-gray-800 text-gray-50" />
            </div>
            <div>
                <label>Пароль</label>
                <input type="password" id="password" name="password" className="inpt bg-gray-800 text-gray-50" />
            </div>
            <div>
                <label>Повторите пароль</label>
                <input type="password" id="repeatPassword" name="repeatPassword" className="inpt bg-gray-800 text-gray-50" />
            </div>
            <div className="pt-2 w-full">
                <button type="submit" className="px-6 py-2 rounded border ml-auto">Войти</button>
            </div>
            <p className="text-sm font-light text-center">Уже есть учетная запись? <span className="cursor-pointer underline" onClick={() => setIfLogin(true)}>Войдите!</span></p>
        </form>
    )
}