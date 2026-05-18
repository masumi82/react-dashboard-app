"use client"

import {
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Database,
  Package,
  Crown,
  Layout,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'
import { useTranslation } from 'react-i18next'

// `titleKey`/`descriptionKey` hold full i18n keys (landing namespace).
// `as const` keeps each key as a literal type for the type-safe t().
const mainFeatures = [
  {
    icon: Package,
    titleKey: 'features.mainFeatures.curatedLibrary.title',
    descriptionKey: 'features.mainFeatures.curatedLibrary.description'
  },
  {
    icon: Crown,
    titleKey: 'features.mainFeatures.freePremium.title',
    descriptionKey: 'features.mainFeatures.freePremium.description'
  },
  {
    icon: Layout,
    titleKey: 'features.mainFeatures.readyTemplates.title',
    descriptionKey: 'features.mainFeatures.readyTemplates.description'
  },
  {
    icon: Zap,
    titleKey: 'features.mainFeatures.regularUpdates.title',
    descriptionKey: 'features.mainFeatures.regularUpdates.description'
  }
] as const

const secondaryFeatures = [
  {
    icon: BarChart3,
    titleKey: 'features.secondaryFeatures.multipleFrameworks.title',
    descriptionKey: 'features.secondaryFeatures.multipleFrameworks.description'
  },
  {
    icon: Palette,
    titleKey: 'features.secondaryFeatures.modernStack.title',
    descriptionKey: 'features.secondaryFeatures.modernStack.description'
  },
  {
    icon: Users,
    titleKey: 'features.secondaryFeatures.responsiveDesign.title',
    descriptionKey: 'features.secondaryFeatures.responsiveDesign.description'
  },
  {
    icon: Database,
    titleKey: 'features.secondaryFeatures.developerFriendly.title',
    descriptionKey: 'features.secondaryFeatures.developerFriendly.description'
  }
] as const

export function FeaturesSection() {
  const { t } = useTranslation('landing')

  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('features.badge')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('features.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.subheading')}
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="feature-1-light.png"
            darkSrc="feature-1-dark.png"
            alt={t('features.firstSection.imageAlt')}
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {t('features.firstSection.title')}
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                {t('features.firstSection.description')}
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{t(feature.descriptionKey)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="https://shadcnstore.com/templates" className='flex items-center'>
                  {t('features.firstSection.browseTemplates')}
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="https://shadcnstore.com/blocks">
                  {t('features.firstSection.viewComponents')}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {t('features.secondSection.title')}
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                {t('features.secondSection.description')}
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{t(feature.descriptionKey)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="#" className='flex items-center'>
                  {t('features.secondSection.viewDocumentation')}
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="https://github.com/silicondeck/shadcn-dashboard-landing-template" target="_blank" rel="noopener noreferrer">
                  {t('features.secondSection.githubRepository')}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="feature-2-light.png"
            darkSrc="feature-2-dark.png"
            alt={t('features.secondSection.imageAlt')}
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
