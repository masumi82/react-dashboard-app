import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

/** Supported languages shown in the switcher. */
const languages = [
  { code: 'ja', labelKey: 'language.ja' },
  { code: 'en', labelKey: 'language.en' },
] as const

/**
 * Dropdown that lets the user switch the UI language.
 * The choice is persisted to localStorage by i18next-browser-languagedetector.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation('common')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn('cursor-pointer', className)}
          aria-label={t('language.label')}
        >
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => void i18n.changeLanguage(lang.code)}
            className={
              i18n.resolvedLanguage === lang.code ? 'bg-accent font-medium' : ''
            }
          >
            {t(lang.labelKey)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
