"use client"

import {
  Shield,
  BarChart3,
  Database,
  Building2,
  Rocket,
  Settings,
  Zap,
  Package,
  Layout,
  Crown,
  Palette
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

// `titleKey`/`nameKey`/`descriptionKey` hold full i18n keys (landing namespace).
// Section titles and item names reuse the navbar.solutions.* keys.
// `as const` keeps each key as a literal type for the type-safe t().
const menuSections = [
  {
    titleKey: 'navbar.solutions.browseProducts',
    items: [
      { nameKey: 'navbar.solutions.freeBlocks', descriptionKey: 'megaMenu.descriptions.freeBlocks', icon: Package, href: '#free-blocks' },
      { nameKey: 'navbar.solutions.premiumTemplates', descriptionKey: 'megaMenu.descriptions.premiumTemplates', icon: Crown, href: '#premium-templates' },
      { nameKey: 'navbar.solutions.adminDashboards', descriptionKey: 'megaMenu.descriptions.adminDashboards', icon: BarChart3, href: '#admin-dashboards' },
      { nameKey: 'navbar.solutions.landingPages', descriptionKey: 'megaMenu.descriptions.landingPages', icon: Layout, href: '#landing-pages' },
    ],
  },
  {
    titleKey: 'navbar.solutions.categories',
    items: [
      { nameKey: 'navbar.solutions.ecommerce', descriptionKey: 'megaMenu.descriptions.ecommerce', icon: Building2, href: '#ecommerce' },
      { nameKey: 'navbar.solutions.saasDashboards', descriptionKey: 'megaMenu.descriptions.saasDashboards', icon: Rocket, href: '#saas-dashboards' },
      { nameKey: 'navbar.solutions.analytics', descriptionKey: 'megaMenu.descriptions.analytics', icon: BarChart3, href: '#analytics' },
      { nameKey: 'navbar.solutions.authentication', descriptionKey: 'megaMenu.descriptions.authentication', icon: Shield, href: '#authentication' },
    ],
  },
  {
    titleKey: 'navbar.solutions.resources',
    items: [
      { nameKey: 'navbar.solutions.documentation', descriptionKey: 'megaMenu.descriptions.documentation', icon: Database, href: '#docs' },
      { nameKey: 'navbar.solutions.componentShowcase', descriptionKey: 'megaMenu.descriptions.componentShowcase', icon: Palette, href: '#showcase' },
      { nameKey: 'navbar.solutions.githubRepository', descriptionKey: 'megaMenu.descriptions.githubRepository', icon: Settings, href: '#github' },
      { nameKey: 'navbar.solutions.designSystem', descriptionKey: 'megaMenu.descriptions.designSystem', icon: Zap, href: '#design-system' },
    ],
  },
] as const

export function MegaMenu() {
  const { t } = useTranslation('landing')

  return (
    <div className="w-[700px] max-w-[95vw] p-4 sm:p-6 lg:p-8 bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {menuSections.map((section) => (
          <div key={section.titleKey} className="space-y-4 lg:space-y-6">
            {/* Section Header */}
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {t(section.titleKey)}
            </h3>

            {/* Section Links */}
            <div className="space-y-3 lg:space-y-4">
              {section.items.map((item) => (
                <a
                  key={item.nameKey}
                  href={item.href}
                  className="group block space-y-1 lg:space-y-2 hover:bg-accent rounded-md p-2 lg:p-3 -mx-2 lg:-mx-3 transition-colors my-0"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {t(item.nameKey)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed ml-6 lg:ml-7">
                    {t(item.descriptionKey)}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
