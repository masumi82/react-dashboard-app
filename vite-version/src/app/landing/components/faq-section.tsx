"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from 'react-i18next'

// `questionKey`/`answerKey` hold full i18n keys (landing namespace).
// `as const` keeps each key as a literal type for the type-safe t().
const faqItems = [
  {
    value: 'item-1',
    questionKey: 'faq.items.item1.question',
    answerKey: 'faq.items.item1.answer',
  },
  {
    value: 'item-2',
    questionKey: 'faq.items.item2.question',
    answerKey: 'faq.items.item2.answer',
  },
  {
    value: 'item-3',
    questionKey: 'faq.items.item3.question',
    answerKey: 'faq.items.item3.answer',
  },
  {
    value: 'item-4',
    questionKey: 'faq.items.item4.question',
    answerKey: 'faq.items.item4.answer',
  },
  {
    value: 'item-5',
    questionKey: 'faq.items.item5.question',
    answerKey: 'faq.items.item5.answer',
  },
  {
    value: 'item-6',
    questionKey: 'faq.items.item6.question',
    answerKey: 'faq.items.item6.answer',
  },
] as const

const FaqSection = () => {
  const { t } = useTranslation('landing')

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('faq.badge')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('faq.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.subheading')}
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{t(item.questionKey)}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{t(item.answerKey)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              {t('faq.stillHaveQuestions')}
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                {t('faq.contactSupport')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
