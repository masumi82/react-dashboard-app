"use client"

import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from 'react-i18next'

// `categoryKey`/`titleKey`/`descriptionKey` hold full i18n keys (landing
// namespace). `as const` keeps each key as a literal type for type-safe t().
const blogs = [
    {
      id: 1,
      image: 'https://ui.shadcn.com/placeholder.svg',
      categoryKey: 'blog.posts.first.category',
      titleKey: 'blog.posts.first.title',
      descriptionKey: 'blog.posts.first.description',
    },
    {
      id: 2,
      image: 'https://ui.shadcn.com/placeholder.svg',
      categoryKey: 'blog.posts.second.category',
      titleKey: 'blog.posts.second.title',
      descriptionKey: 'blog.posts.second.description',
    },
    {
      id: 3,
      image: 'https://ui.shadcn.com/placeholder.svg',
      categoryKey: 'blog.posts.third.category',
      titleKey: 'blog.posts.third.title',
      descriptionKey: 'blog.posts.third.description',
    },
  ] as const

export function BlogSection() {
  const { t } = useTranslation('landing')

  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('blog.badge')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('blog.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('blog.subheading')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <img
                    src={blog.image}
                    alt={t(blog.titleKey)}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    {t(blog.categoryKey)}
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">{t(blog.titleKey)}</h3>
                  </a>
                  <p className="text-muted-foreground">{t(blog.descriptionKey)}</p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
                  >
                    {t('blog.learnMore')}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
