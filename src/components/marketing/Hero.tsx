"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <Button variant="outline" className="rounded-full">
                <span className="text-primary">Nouveau : </span>
                <span className="ml-2">Import direct depuis Google Sheets</span>
              </Button>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transformez vos tableurs en dashboards interactifs en quelques
              clics
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              TabloVisual analyse intelligemment vos données pour créer des
              visualisations pertinentes et personnalisées. Importez vos
              fichiers Excel, Google Sheets ou CSV et obtenez instantanément des
              insights précieux.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/signup">
                <Button size="lg" className="rounded-full">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link href="#demo" className="text-sm font-semibold leading-6">
                Voir la démo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
          >
            <div className="relative w-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
              <Image
                src="/dashboard-preview.png"
                alt="Interface de TabloVisual"
                width={1824}
                height={1080}
                className="w-full rounded-xl bg-gray-900/5 ring-1 ring-gray-900/5"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}
