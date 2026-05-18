"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, Code, Palette, Layout, Crown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// `titleKey`/`descriptionKey` hold full i18n keys (landing namespace).
// `as const` keeps each key as a literal type for the type-safe t().
const values = [
  {
    icon: Code,
    titleKey: 'about.values.developerFirst.title',
    descriptionKey: 'about.values.developerFirst.description'
  },
  {
    icon: Palette,
    titleKey: 'about.values.designExcellence.title',
    descriptionKey: 'about.values.designExcellence.description'
  },
  {
    icon: Layout,
    titleKey: 'about.values.productionReady.title',
    descriptionKey: 'about.values.productionReady.description'
  },
  {
    icon: Crown,
    titleKey: 'about.values.premiumQuality.title',
    descriptionKey: 'about.values.premiumQuality.description'
  }
] as const

export function AboutSection() {
  const { t } = useTranslation('landing')

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t('about.badge')}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {t('about.heading')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('about.subheading')}
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{t(value.titleKey)}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{t(value.descriptionKey)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">{t('about.madeWithLove')}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <a href="https://github.com/silicondeck/shadcn-dashboard-landing-template" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {t('about.starOnGithub')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <a href="https://discord.com/invite/XEQhPc9a6p" target="_blank" rel="noopener noreferrer">
                {t('about.joinDiscord')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
