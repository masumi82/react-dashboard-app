"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, Linkedin, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// `roleKey`/`descriptionKey` hold full i18n keys (landing namespace).
// `as const` keeps each key as a literal type for the type-safe t().
const team = [
  {
    id: 1,
    name: 'Alexandra Chen',
    roleKey: 'team.members.alexandraChen.role',
    descriptionKey: 'team.members.alexandraChen.description',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=60&w=150&auto=format&fit=crop',
    fallback: 'AC',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    roleKey: 'team.members.marcusRodriguez.role',
    descriptionKey: 'team.members.marcusRodriguez.description',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=150&auto=format&fit=crop',
    fallback: 'MR',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    roleKey: 'team.members.sophieLaurent.role',
    descriptionKey: 'team.members.sophieLaurent.description',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=150&auto=format&fit=crop',
    fallback: 'SL',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    roleKey: 'team.members.davidKim.role',
    descriptionKey: 'team.members.davidKim.description',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=150&auto=format&fit=crop',
    fallback: 'DK',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 5,
    name: 'Emma Thompson',
    roleKey: 'team.members.emmaThompson.role',
    descriptionKey: 'team.members.emmaThompson.description',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=60&w=150&auto=format&fit=crop',
    fallback: 'ET',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 6,
    name: 'Ryan Mitchell',
    roleKey: 'team.members.ryanMitchell.role',
    descriptionKey: 'team.members.ryanMitchell.description',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=60&w=150&auto=format&fit=crop',
    fallback: 'RM',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 7,
    name: 'James Anderson',
    roleKey: 'team.members.jamesAnderson.role',
    descriptionKey: 'team.members.jamesAnderson.description',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?q=60&w=150&auto=format&fit=crop',
    fallback: 'JA',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 8,
    name: 'Isabella Garcia',
    roleKey: 'team.members.isabellaGarcia.role',
    descriptionKey: 'team.members.isabellaGarcia.description',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=60&w=150&auto=format&fit=crop',
    fallback: 'IG',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  }
] as const

export function TeamSection() {
  const { t } = useTranslation('landing')

  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t('team.badge')}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {t('team.heading')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('team.subheading')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <Card key={member.id} className="shadow-xs py-2">
              <CardContent className="p-4">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <CardDecorator>
                      <Avatar className="h-24 w-24 border shadow-lg">
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-lg font-semibold">
                          {member.fallback}
                        </AvatarFallback>
                      </Avatar>
                    </CardDecorator>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {t(member.roleKey)}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t(member.descriptionKey)}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('team.linkedinAriaLabel', { name: member.name })}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('team.githubAriaLabel', { name: member.name })}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('team.websiteAriaLabel', { name: member.name })}
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
