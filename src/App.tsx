import { Moon, Sun } from "phosphor-react"
import { useEffect, useState } from "react"

function App() {

  useEffect(() => {
    document.body.classList.add('duration-1000')
  })

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(
    localStorage.theme
      ?
      (
        localStorage.theme === "dark"
          ?
          true
          :
          false
      )
      :
      systemTheme
  )

  useEffect(() => {
    !isDarkModeOn
      ?
      document.documentElement.classList.remove('dark')
      :
      document.documentElement.classList.add('dark')
  }, [isDarkModeOn])

  function handleThemeSwitcher() {
    setIsDarkModeOn(!isDarkModeOn)
    localStorage.theme = !isDarkModeOn ? "dark" : "light"
  }

  console.log(isDarkModeOn)

  return (
    <main className="bg-zinc-300 p-4 w-[30rem] h-fit rounded dark:bg-zinc-900">
      <div className="flex flex-row items-center justify-around gap-3 font-semibold mb-6">
        <h1>DarkMode template with Switch</h1>
        <button
          className="bg-purple-500 p-2 rounded-full"
          onClick={handleThemeSwitcher}
        >
          {
            isDarkModeOn
              ?
              <Sun size={24} weight="fill" />
              :
              <Moon size={24} weight="fill" />
          }
        </button>
      </div>
      <div className="ml-4 mr-[7rem]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio repellendus atque eligendi voluptatum sequi, voluptates iste. Ut, illo maiores eaque dolores aliquid veritatis eius vitae similique! Accusantium, adipisci tempora!
        </p>
      </div>
    </main>
  )
}

export default App
