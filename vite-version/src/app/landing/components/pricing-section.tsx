"use client"

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'

// `id` is a runtime discriminator for price-rendering branches.
// `nameKey`/`descriptionKey`/`ctaKey`/`includesPreviousKey` and each
// `features[]` entry hold full i18n keys (landing namespace). `as const`
// keeps every key as a literal type for the type-safe t().
const plans = [
  {
    id: 'free',
    nameKey: 'pricing.plans.free.name',
    descriptionKey: 'pricing.plans.free.description',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'pricing.plans.free.features.0',
      'pricing.plans.free.features.1',
      'pricing.plans.free.features.2',
      'pricing.plans.free.features.3',
      'pricing.plans.free.features.4'
    ],
    ctaKey: 'pricing.plans.free.cta',
    popular: false,
    includesPreviousKey: null
  },
  {
    id: 'pro',
    nameKey: 'pricing.plans.pro.name',
    descriptionKey: 'pricing.plans.pro.description',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      'pricing.plans.pro.features.0',
      'pricing.plans.pro.features.1',
      'pricing.plans.pro.features.2',
      'pricing.plans.pro.features.3',
      'pricing.plans.pro.features.4',
      'pricing.plans.pro.features.5',
      'pricing.plans.pro.features.6',
      'pricing.plans.pro.features.7',
      'pricing.plans.pro.features.8'
    ],
    ctaKey: 'pricing.plans.pro.cta',
    popular: true,
    includesPreviousKey: 'pricing.plans.pro.includesPrevious'
  },
  {
    id: 'lifetime',
    nameKey: 'pricing.plans.lifetime.name',
    descriptionKey: 'pricing.plans.lifetime.description',
    monthlyPrice: 299,
    yearlyPrice: 299,
    features: [
      'pricing.plans.lifetime.features.0',
      'pricing.plans.lifetime.features.1',
      'pricing.plans.lifetime.features.2',
      'pricing.plans.lifetime.features.3',
      'pricing.plans.lifetime.features.4',
      'pricing.plans.lifetime.features.5'
    ],
    ctaKey: 'pricing.plans.lifetime.cta',
    popular: false,
    includesPreviousKey: 'pricing.plans.lifetime.includesPrevious'
  }
] as const

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const { t } = useTranslation('landing')

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">{t('pricing.badge')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('pricing.heading')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('pricing.subheading')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-2">
            <ToggleGroup
              type="single"
              value={isYearly ? "yearly" : "monthly"}
              onValueChange={(value) => setIsYearly(value === "yearly")}
              className="bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none"
            >
              <ToggleGroupItem
                value="monthly"
                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
              >
                {t('pricing.monthly')}
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
              >
                {t('pricing.annually')}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <p className="text-sm text-muted-foreground">
            <Trans
              i18nKey="pricing.savingsNote"
              ns="landing"
              components={{
                1: <span className="text-primary font-semibold" />,
              }}
            />
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border">
            <div className="grid lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 grid grid-rows-subgrid row-span-4 gap-6 ${
                    plan.popular
                      ? 'my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur'
                      : ''
                  }`}
                >
                  {/* Plan Header */}
                  <div>
                    <div className="text-lg font-medium tracking-tight mb-2">{t(plan.nameKey)}</div>
                    <div className="text-muted-foreground text-balance text-sm">{t(plan.descriptionKey)}</div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="text-4xl font-bold mb-1">
                      {plan.id === 'lifetime' ? (
                        `$${plan.monthlyPrice}`
                      ) : plan.id === 'free' ? (
                        '$0'
                      ) : (
                        `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {plan.id === 'lifetime' ? t('pricing.oneTimePayment') : t('pricing.perMonth')}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      className={`w-full cursor-pointer my-2 ${
                        plan.popular
                          ? 'shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90'
                          : 'shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50'
                      }`}
                      variant={plan.popular ? 'default' : 'secondary'}
                    >
                      {t(plan.ctaKey)}
                    </Button>
                  </div>

                  {/* Features */}
                  <div>
                    <ul role="list" className="space-y-3 text-sm">
                      {plan.includesPreviousKey && (
                        <li className="flex items-center gap-3 font-medium">
                          {t(plan.includesPreviousKey)}:
                        </li>
                      )}
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            <Trans
              i18nKey="pricing.enterpriseNote"
              ns="landing"
              components={{
                1: (
                  <Button variant="link" className="p-0 h-auto cursor-pointer" asChild>
                    <a href="#contact" />
                  </Button>
                ),
              }}
            />
          </p>
        </div>
      </div>
    </section>
  )
}
