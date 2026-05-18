"use client"

import { useState } from 'react'
import { Menu, Github, LayoutDashboard, ChevronDown, X, Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { getAppUrl } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { MegaMenu } from '@/components/landing/mega-menu'
import { ModeToggle } from '@/components/mode-toggle'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useTheme } from '@/hooks/use-theme'

// `labelKey` holds a full i18n key (landing namespace). `as const` keeps each
// key as a literal type so the type-safe t() accepts it.
const navigationItems = [
  { labelKey: 'navbar.nav.home', href: '#hero', hasMegaMenu: false },
  { labelKey: 'navbar.nav.features', href: '#features', hasMegaMenu: false },
  { labelKey: 'navbar.nav.solutions', href: '#features', hasMegaMenu: true },
  { labelKey: 'navbar.nav.team', href: '#team', hasMegaMenu: false },
  { labelKey: 'navbar.nav.pricing', href: '#pricing', hasMegaMenu: false },
  { labelKey: 'navbar.nav.faq', href: '#faq', hasMegaMenu: false },
  { labelKey: 'navbar.nav.contact', href: '#contact', hasMegaMenu: false },
] as const

// Solutions menu items for mobile. `kind` discriminates section titles from links.
const solutionsItems = [
  { kind: 'title', labelKey: 'navbar.solutions.browseProducts' },
  { kind: 'link', labelKey: 'navbar.solutions.freeBlocks', href: '#free-blocks' },
  { kind: 'link', labelKey: 'navbar.solutions.premiumTemplates', href: '#premium-templates' },
  { kind: 'link', labelKey: 'navbar.solutions.adminDashboards', href: '#admin-dashboards' },
  { kind: 'link', labelKey: 'navbar.solutions.landingPages', href: '#landing-pages' },
  { kind: 'title', labelKey: 'navbar.solutions.categories' },
  { kind: 'link', labelKey: 'navbar.solutions.ecommerce', href: '#ecommerce' },
  { kind: 'link', labelKey: 'navbar.solutions.saasDashboards', href: '#saas-dashboards' },
  { kind: 'link', labelKey: 'navbar.solutions.analytics', href: '#analytics' },
  { kind: 'link', labelKey: 'navbar.solutions.authentication', href: '#authentication' },
  { kind: 'title', labelKey: 'navbar.solutions.resources' },
  { kind: 'link', labelKey: 'navbar.solutions.documentation', href: '#docs' },
  { kind: 'link', labelKey: 'navbar.solutions.componentShowcase', href: '#showcase' },
  { kind: 'link', labelKey: 'navbar.solutions.githubRepository', href: '#github' },
  { kind: 'link', labelKey: 'navbar.solutions.designSystem', href: '#design-system' },
] as const

// Smooth scroll function
const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const { t } = useTranslation('landing')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="https://shadcnstore.com" className="flex items-center space-x-2 cursor-pointer" target='_blank' rel="noopener noreferrer">
            <Logo size={32} />
            <span className="font-bold">
              ShadcnStore
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.labelKey}>
                {item.hasMegaMenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary cursor-pointer">
                      {t(item.labelKey)}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaMenu />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      if (item.href.startsWith('#')) {
                        smoothScrollTo(item.href)
                      } else {
                        window.location.href = item.href
                      }
                    }}
                  >
                    {t(item.labelKey)}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center space-x-2">
          <ModeToggle variant="ghost" />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" asChild className="cursor-pointer">
            <a href="https://github.com/silicondeck/shadcn-dashboard-landing-template" target="_blank" rel="noopener noreferrer" aria-label={t('navbar.solutions.githubRepository')}>
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" asChild className="cursor-pointer">
            <a href={getAppUrl("/dashboard")} target="_blank" rel="noopener noreferrer">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              {t('navbar.dashboard')}
            </a>
          </Button>
          <Button variant="ghost" asChild className="cursor-pointer">
            <a href={getAppUrl("/auth/sign-in")}>{t('navbar.signIn')}</a>
          </Button>
          <Button asChild className="cursor-pointer">
            <a href={getAppUrl("/auth/sign-up")}>{t('navbar.getStarted')}</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t('navbar.toggleMenu')}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 gap-0 [&>button]:hidden overflow-hidden flex flex-col">
            <div className="flex flex-col h-full">
              {/* Header */}
              <SheetHeader className="space-y-0 p-4 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Logo size={16} />
                  </div>
                  <SheetTitle className="text-lg font-semibold">ShadcnStore</SheetTitle>
                  <div className="ml-auto flex items-center gap-2">
                    <LanguageSwitcher className="h-8 w-8" />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="cursor-pointer h-8 w-8"
                    >
                      <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="cursor-pointer h-8 w-8">
                      <a href="https://github.com/silicondeck/shadcn-dashboard-landing-template" target="_blank" rel="noopener noreferrer" aria-label={t('navbar.solutions.githubRepository')}>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="cursor-pointer h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-1">
                  {navigationItems.map((item) => (
                    <div key={item.labelKey}>
                      {item.hasMegaMenu ? (
                        <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            {t(item.labelKey)}
                            <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-1">
                            {solutionsItems.map((solution, index) => (
                              solution.kind === 'title' ? (
                                <div
                                  key={`title-${index}`}
                                  className="px-4 mt-5 py-2 text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider"
                                >
                                  {t(solution.labelKey)}
                                </div>
                              ) : (
                                <a
                                  key={solution.labelKey}
                                  href={solution.href}
                                  className="flex items-center px-4 py-2 text-sm rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                                  onClick={(e) => {
                                    setIsOpen(false)
                                    if (solution.href.startsWith('#')) {
                                      e.preventDefault()
                                      setTimeout(() => smoothScrollTo(solution.href), 100)
                                    }
                                  }}
                                >
                                  {t(solution.labelKey)}
                                </a>
                              )
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                          onClick={(e) => {
                            setIsOpen(false)
                            if (item.href.startsWith('#')) {
                              e.preventDefault()
                              setTimeout(() => smoothScrollTo(item.href), 100)
                            }
                          }}
                        >
                          {t(item.labelKey)}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer Actions */}
              <div className="border-t p-6 space-y-4">

                {/* Primary Actions */}
                <div className="space-y-3">
                  <Button variant="outline" size="lg" asChild className="w-full cursor-pointer">
                    <a href={getAppUrl("/dashboard")}>
                      <LayoutDashboard className="size-4" />
                      {t('navbar.dashboard')}
                    </a>
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="lg" asChild className="cursor-pointer">
                      <a href={getAppUrl("/auth/sign-in")}>{t('navbar.signIn')}</a>
                    </Button>
                    <Button asChild size="lg" className="cursor-pointer" >
                      <a href={getAppUrl("/auth/sign-up")}>{t('navbar.getStarted')}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
