import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

// The four metrics, previously rendered as four separate cards.
const cards = [
  {
    description: "Total Revenue",
    value: "$1,250.00",
    trend: "up",
    badge: "+12.5%",
    footerText: "Trending up this month",
    footerNote: "Visitors for the last 6 months",
  },
  {
    description: "New Customers",
    value: "1,234",
    trend: "down",
    badge: "-20%",
    footerText: "Down 20% this period",
    footerNote: "Acquisition needs attention",
  },
  {
    description: "Active Accounts",
    value: "45,678",
    trend: "up",
    badge: "+12.5%",
    footerText: "Strong user retention",
    footerNote: "Engagement exceed targets",
  },
  {
    description: "Growth Rate",
    value: "4.5%",
    trend: "up",
    badge: "+4.5%",
    footerText: "Steady performance increase",
    footerNote: "Meets growth projections",
  },
] as const

// Auto-advance interval in milliseconds.
const ROTATE_INTERVAL = 4000

export function SectionCards() {
  // index: which metric is shown. isPaused: true while the pointer hovers the card.
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance to the next metric. The timer restarts whenever `index`
  // changes (including manual navigation) and stops while the card is hovered.
  useEffect(() => {
    if (isPaused) return
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % cards.length)
    }, ROTATE_INTERVAL)
    return () => clearTimeout(timer)
  }, [isPaused, index])

  // Move to a given index, wrapping around at both ends.
  const goTo = (next: number) => {
    setIndex((next + cards.length) % cards.length)
  }

  const card = cards[index]
  const TrendIcon = card.trend === "up" ? TrendingUp : TrendingDown

  return (
    <Card
      className="@container/card from-primary/5 to-card dark:bg-card bg-gradient-to-t shadow-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated metric content. min-height keeps the card from collapsing
          during the brief gap between the fade-out and the fade-in. */}
      <div className="min-h-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CardHeader>
              <CardDescription>{card.description}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {card.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <TrendIcon />
                  {card.badge}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {card.footerText} <TrendIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">{card.footerNote}</div>
            </CardFooter>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel controls: previous arrow, position dots, next arrow. */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer"
          aria-label="Previous metric"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft className="size-4" />
        </Button>
        {cards.map((item, i) => (
          <button
            key={item.description}
            type="button"
            aria-label={`Show ${item.description}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all cursor-pointer",
              i === index ? "bg-primary w-5" : "bg-muted-foreground/30 w-2",
            )}
          />
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer"
          aria-label="Next metric"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </Card>
  )
}
