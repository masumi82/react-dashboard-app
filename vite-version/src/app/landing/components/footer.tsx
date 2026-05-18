"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Trans, useTranslation } from "react-i18next"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Logo } from '@/components/logo'
import { Github, Twitter, Linkedin, Youtube, Heart } from 'lucide-react'

// `labelKey` holds a full i18n key (landing namespace). `as const` keeps each
// key as a literal type for the type-safe t().
const footerLinks = {
  product: [
    { labelKey: 'footer.links.features', href: '#features' },
    { labelKey: 'footer.links.pricing', href: '#pricing' },
    { labelKey: 'footer.links.api', href: '#api' },
    { labelKey: 'footer.links.documentation', href: '#docs' },
  ],
  company: [
    { labelKey: 'footer.links.about', href: '#about' },
    { labelKey: 'footer.links.blog', href: '#blog' },
    { labelKey: 'footer.links.careers', href: '#careers' },
    { labelKey: 'footer.links.press', href: '#press' },
  ],
  resources: [
    { labelKey: 'footer.links.helpCenter', href: '#help' },
    { labelKey: 'footer.links.community', href: '#community' },
    { labelKey: 'footer.links.guides', href: '#guides' },
    { labelKey: 'footer.links.webinars', href: '#webinars' },
  ],
  legal: [
    { labelKey: 'footer.links.privacy', href: '#privacy' },
    { labelKey: 'footer.links.terms', href: '#terms' },
    { labelKey: 'footer.links.security', href: '#security' },
    { labelKey: 'footer.links.status', href: '#status' },
  ],
} as const

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/silicondeck/shadcn-dashboard-landing-template', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function LandingFooter() {
  const { t } = useTranslation('landing')

  // Schema is built inside the component so the validation message is localized.
  const newsletterSchema = z.object({
    email: z.string().email({
      message: t('footer.newsletter.invalidEmail'),
    }),
  })

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof newsletterSchema>) {
    // Here you would typically send the email to your newsletter service
    console.log(values)
    // Show success message and reset form
    form.reset()
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('footer.newsletter.description')}
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md mx-auto sm:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('footer.newsletter.placeholder')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="cursor-pointer">{t('footer.newsletter.subscribe')}</Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 grid-cols-4 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-4 lg:col-span-2 max-w-2xl">
            <div className="flex items-center space-x-2 mb-4 max-lg:justify-center">
              <a href="https://shadcnstore.com" target='_blank' className="flex items-center space-x-2 cursor-pointer">
                <Logo size={32} />
                <span className="font-bold text-xl">ShadcnStore</span>
              </a>
            </div>
            <p className="text-muted-foreground mb-6 max-lg:text-center max-lg:flex max-lg:justify-center">
              {t('footer.brandDescription')}
            </p>
            <div className="flex space-x-4 max-lg:justify-center">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">{t('footer.columns.product')}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">{t('footer.columns.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">{t('footer.columns.resources')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">{t('footer.columns.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Trans
                i18nKey="footer.madeWith"
                ns="landing"
                components={{
                  1: <Heart className="h-4 w-4 text-red-500 fill-current" />,
                  2: (
                    <a
                      href="https://shadcnstore.com"
                      target='_blank'
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                    />
                  ),
                }}
              />
            </div>
            <span className="hidden sm:inline">•</span>
            <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-foreground transition-colors">
              {t('footer.bottomLinks.privacyPolicy')}
            </a>
            <a href="#terms" className="hover:text-foreground transition-colors">
              {t('footer.bottomLinks.termsOfService')}
            </a>
            <a href="#cookies" className="hover:text-foreground transition-colors">
              {t('footer.bottomLinks.cookiePolicy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
