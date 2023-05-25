import { createContext, useContext, useState, useRef } from 'react'
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
  const [darking, setDark] = useState(true)

  const darkmode = () => {
    setDark(!darking)
  }

  return (
    <MyContext.Provider
      value={{
        darking,
        darkmode,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}
