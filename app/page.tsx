"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Tv,
  MonitorSmartphone,
  Globe,
  Lock,
  Smartphone,
  Headphones,
  ChevronDown,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/language-provider";
import {
  organizationSchema,
  productSchema,
  websiteSchema,
  serviceSchema,
} from "@/lib/structured-data";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  const { currentLanguage, changeLanguage, languages, isRTL, mounted } =
    useLanguage();

  const wtsp = "https://wa.link/7l10vn";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: t("features.items.instantSetup.title"),
      description: t("features.items.instantSetup.description"),
      icon: <Tv className="size-5" />,
    },
    {
      title: t("features.items.hdQuality.title"),
      description: t("features.items.hdQuality.description"),
      icon: <MonitorSmartphone className="size-5" />,
    },
    {
      title: t("features.items.worldwideChannels.title"),
      description: t("features.items.worldwideChannels.description"),
      icon: <Globe className="size-5" />,
    },
    {
      title: t("features.items.secureStreaming.title"),
      description: t("features.items.secureStreaming.description"),
      icon: <Lock className="size-5" />,
    },
    {
      title: t("features.items.multiDevice.title"),
      description: t("features.items.multiDevice.description"),
      icon: <Smartphone className="size-5" />,
    },
    {
      title: t("features.items.support.title"),
      description: t("features.items.support.description"),
      icon: <Headphones className="size-5" />,
    },
  ];

  // Prevent hydration mismatches by ensuring client-side rendering for dynamic content
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="flex min-h-[100dvh] flex-col">
        <header
          className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
            isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
          }`}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                M
              </div>
              <span>MoonPlay</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.features")}
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.testimonials")}
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.pricing")}
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.faq")}
              </Link>
            </nav>
            <div className="hidden md:flex gap-4 items-center">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Languages className="size-[18px]" />
                    <span className="sr-only">Select language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {Object.entries(languages).map(([code, lang]) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`cursor-pointer ${
                        currentLanguage === code ? "bg-accent" : ""
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>

              <a href={wtsp} target="_blank">
                <Button className="rounded-full">
                  {t("nav.startWatching")}
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              {/* Mobile Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Languages className="size-[18px]" />
                    <span className="sr-only">Select language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {Object.entries(languages).map(([code, lang]) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`cursor-pointer ${
                        currentLanguage === code ? "bg-accent" : ""
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
            >
              <div className="container py-4 flex flex-col gap-4">
                <Link
                  href="#features"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.features")}
                </Link>
                <Link
                  href="#testimonials"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.testimonials")}
                </Link>
                <Link
                  href="#pricing"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.pricing")}
                </Link>
                <Link
                  href="#faq"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.faq")}
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <a href={wtsp} target="_blank">
                    <Button className="rounded-full">
                      {t("nav.startWatching")}
                      <ChevronRight className="ml-1 size-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </header>
        <main className="flex-1">
          {/* Hero Section */}
          <section
            className="w-full py-20 md:py-32 lg:py-40 overflow-hidden"
            aria-label="Hero section - MoonPlay IPTV introduction"
          >
            <div className="container px-4 md:px-6 relative">
              <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <Badge
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  {t("hero.badge")}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  {t("hero.title")}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t("hero.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={wtsp} target="_blank">
                    <Button
                      size="lg"
                      className="rounded-full h-12 px-8 text-base"
                    >
                      {t("nav.startWatching")}
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </a>
                  <a target="_blank" href={wtsp}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-12 px-8 text-base"
                    >
                      {t("contactus")}
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-primary" />
                    <span>{t("hero.features.freeSupport")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-primary" />
                    <span>{t("hero.features.noSetupFee")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-primary" />
                    <span>{t("hero.features.cancelAnytime")}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto max-w-5xl"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                  <Image
                    src="/hero.jpg"
                    width={1280}
                    height={720}
                    alt="MoonPlay IPTV Premium Streaming Service Dashboard - 3000+ Live TV Channels in HD and 4K Quality"
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
              </motion.div>
            </div>
          </section>

          {/* Logos Section */}
          <section
            className="w-full py-12 border-y bg-muted/30"
            aria-label="Available streaming services and channels"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {t("logos.title")}
                </p>
                <div className="flex flex-wrap items-center mt-2 justify-center gap-8 md:gap-12 lg:gap-32">
                  <Image
                    src={`/logo/hulu.png`}
                    alt={`Hulu streaming service available on MoonPlay IPTV`}
                    width={120}
                    height={60}
                    className="h-8 w-auto  opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />

                  <Image
                    src={`/logo/Bein_sport_logo.svg`}
                    alt={`BeIN Sports live channels available on MoonPlay IPTV`}
                    width={120}
                    height={60}
                    className="h-8 w-auto scale-150 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                  <Image
                    src={`/logo/Netflix.png`}
                    alt={`Netflix streaming content available on MoonPlay IPTV`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                  <Image
                    src={`/logo/OSN.webp`}
                    alt={`OSN premium channels available on MoonPlay IPTV`}
                    width={120}
                    height={60}
                    className="h-8 w-auto scale-150 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                  <Image
                    src={`/logo/Amazon.svg`}
                    alt={`Amazon Prime Video content available on MoonPlay IPTV`}
                    width={120}
                    height={60}
                    className="h-8 w-auto scale-110 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                  <Image
                    src={`/logo/espn.png`}
                    alt={`ESPN sports channels available on MoonPlay IPTV`}
                    width={120}
                    height={60}
                    className="h-8 w-auto  opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            id="features"
            className="w-full py-20 md:py-32"
            aria-label="MoonPlay IPTV service features and benefits"
          >
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  {t("features.badge")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t("features.title")}
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  {t("features.description")}
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {features.map((feature, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  {t("howItWorks.badge")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t("howItWorks.title")}
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  {t("howItWorks.description")}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

                {[
                  {
                    step: t("howItWorks.steps.contact.step"),
                    title: t("howItWorks.steps.contact.title"),
                    description: t("howItWorks.steps.contact.description"),
                  },
                  {
                    step: t("howItWorks.steps.activate.step"),
                    title: t("howItWorks.steps.activate.title"),
                    description: t("howItWorks.steps.activate.description"),
                  },
                  {
                    step: t("howItWorks.steps.watch.step"),
                    title: t("howItWorks.steps.watch.title"),
                    description: t("howItWorks.steps.watch.description"),
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative z-10 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  {t("testimonials.badge")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t("testimonials.title")}
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  {t("testimonials.description")}
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(
                  t("testimonials.items", { returnObjects: true }) as any[]
                ).map((testimonial: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex mb-4">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_: any, j: number) => (
                              <Star
                                key={j}
                                className="size-4 text-yellow-500 fill-yellow-500"
                              />
                            ))}
                        </div>
                        <p className="text-lg mb-6 flex-grow">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                          <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section
            id="pricing"
            className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  {t("pricing.badge")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t("pricing.title")}
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  {t("pricing.description")}
                </p>
              </motion.div>

              <div className="mx-auto max-w-5xl">
                <Tabs defaultValue="monthly" className="w-full">
                  <div className="flex justify-center mb-8"></div>
                  <TabsContent value="monthly">
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                      {(
                        t("pricing.plans", { returnObjects: true }) as Array<{
                          name: string;
                          price: string;
                          description: string;
                          features: string[];
                          cta: string;
                          popular?: boolean;
                        }>
                      ).map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Card
                            className={`relative overflow-hidden h-full ${
                              plan.popular
                                ? "border-primary shadow-lg"
                                : "border-border/40 shadow-md"
                            } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                          >
                            {plan.popular && (
                              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                                {t("pricing.popularLabel")}
                              </div>
                            )}
                            <CardContent className="p-6 flex flex-col h-full">
                              <h3 className="text-2xl font-bold">
                                {plan.name}
                              </h3>
                              <div className="flex items-baseline mt-4">
                                <span className="text-4xl font-bold">
                                  {plan.price}
                                </span>
                                <span className="text-muted-foreground ml-1">
                                  {t("pricing.perMonth")}
                                </span>
                              </div>
                              <p className="text-muted-foreground mt-2">
                                {plan.description}
                              </p>
                              <ul className="space-y-3 my-6 flex-grow">
                                {plan.features.map((feature, j) => (
                                  <li key={j} className="flex items-center">
                                    <Check className="mr-2 size-4 text-primary" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <a href={wtsp} target="_blank">
                                <Button
                                  className={`w-full mt-auto rounded-full ${
                                    plan.popular
                                      ? "bg-primary hover:bg-primary/90"
                                      : "bg-muted hover:bg-muted/80"
                                  }`}
                                  variant={plan.popular ? "default" : "outline"}
                                >
                                  {plan.cta}
                                </Button>
                              </a>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  {t("faq.badge")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t("faq.title")}
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  {t("faq.description")}
                </p>
              </motion.div>

              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {(
                    t("faq.questions", { returnObjects: true }) as Array<{
                      question: string;
                      answer: string;
                    }>
                  ).map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <AccordionItem
                        value={`item-${i}`}
                        className="border-b border-border/40 py-2"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            {/* Gradient overlay to soften the background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>

            {/* Decorative elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/8 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/8 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

            {/* Animated floating shapes */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-6 text-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-50 font-bold tracking-tight">
                  {t("cta.title")}
                </h2>
                <p className="mx-auto max-w-[700px]  text-gray-300 md:text-xl">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    {t("contactusS")}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                  {t("cta.subtitle")}
                </p>
              </motion.div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
          <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold">
                  <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                    M
                  </div>
                  <span>MoonPlay</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("footer.description")}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold">{t("footer.product")}</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#features"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t("nav.features")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t("nav.pricing")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t("nav.faq")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t("nav.testimonials")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold">{t("footer.resources")}</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold">{t("footer.company")}</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} MoonPlay.{" "}
                {t("footer.copyright")}
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.terms")}
                </Link>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.cookies")}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
