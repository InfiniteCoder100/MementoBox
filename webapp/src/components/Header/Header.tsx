import { formatAddress } from '@/utils/formatAddress'
import { useWeb3Modal, useDisconnect, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Header({
  page,
  setPage,
}: {
  page: string
  setPage: (page: string) => void
}) {
  const items = [
    { name: 'Send a Memento', page: 'send' },
    { name: 'Memento Box', page: 'box' },
    { name: 'Contact Us', page: 'contact' }, // This links to the contact section
  ]

  const { open } = useWeb3Modal()
  const { disconnect } = useDisconnect()
  const { address } = useWeb3ModalAccount()

  const [showDisconnect, setShowDisconnect] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return true 
  })

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    
    document.documentElement.classList.toggle('dark', !darkMode);
    document.documentElement.classList.toggle('light', darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`w-full py-[10px] ${darkMode ? 'bg-bg' : 'bg-white'} text-${darkMode ? 'fg' : 'black'}`}>
      <div className="flex w-fit h-[55px] mr-auto pl-[30px] gap-8 items-center gap-[32px] text-2xl">
        {items.map((item) => (
          <a
            key={`${item.page}`}
            href={`#${item.page}`} // This links to the corresponding section by ID
            className={`cursor-pointer h-full leading-[55px] transition-colors border-b ${page === item.page ? 'border-border' : 'border-bg'} ${darkMode ? 'text-fg' : 'text-black'}`}
            onClick={() => setPage(item.page)}
          >
            {item.name}
          </a>
        ))}

        {/* Dark Mode Toggle */}
        <div className="flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only"
            checked={!darkMode}
            onChange={toggleTheme}
          />
          <label
            htmlFor="theme-toggle"
            className="flex items-center justify-between p-1 w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full relative"
          >
            <FaSun className="text-yellow-500" />
            <FaMoon className="text-gray-900 dark:text-white" />
            <span
              className={`absolute top-[4px] left-[4px] w-6 h-6 bg-white dark:bg-gray-900 rounded-full transition-transform duration-300 ${darkMode ? 'translate-x-0' : 'translate-x-8'}`}
            ></span>
          </label>
        </div>

        {/* Wallet Connection and Disconnect */}
        <div
          className="absolute right-[20px] top-[20px]"
          onMouseLeave={() => setShowDisconnect(false)}
        >
          {address ? (
            <div
              className={`h-[53px] text-xl px-[34px] py-[8px] rounded-[100px] flex items-center text-xl border border-border transition-colors duration-300 hover:bg-bg-hover hover:border-primary ${darkMode ? 'text-fg' : 'text-black'}`}
              onClick={() => setShowDisconnect(true)}
              onMouseOver={() => setShowDisconnect(true)}
            >
              {formatAddress(address)}
            </div>
          ) : (
            <button
              className={
                'bg-primary w-[202px] h-[53px] text-xl px-[34px] py-[8px] rounded-[20px] flex items-center font-medium' +
                ' cursor-pointer transition-colors duration-300 hover:bg-fg hover:text-primary'
              }
              onClick={() => {
                open().then(console.log.bind(null, 23))
              }}
            >
              Connect Wallet
            </button>
          )}

          {showDisconnect && (
            <div
              className="absolute right-0 mt-2 bg-white dark:bg-dark-bg border border-border shadow-lg rounded-md z-10"
            >
              <button
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-200"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
