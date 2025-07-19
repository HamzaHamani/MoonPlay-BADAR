'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../lib/i18n'

interface LanguageContextType {
  currentLanguage: string
  changeLanguage: (lang: string) => void
  languages: { [key: string]: { name: string; flag: string } }
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isRTL, setIsRTL] = useState(false)

  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    fr: { name: 'Français', flag: '🇫🇷' },
    ar: { name: 'العربية', flag: '🇲🇦' },
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'
    setCurrentLanguage(savedLanguage)
    i18n.changeLanguage(savedLanguage)
    setIsRTL(savedLanguage === 'ar')
    
    // Set HTML dir attribute
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = savedLanguage
  }, [i18n])

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang)
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
    setIsRTL(lang === 'ar')
    
    // Update HTML attributes
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}
