'use client'

import { LegalNotice } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { useState } from 'react'

interface LegalProps {
  legalTexts: LegalNotice[]
}

type LegalLanguages = 'de' | 'en'

export default function Legal({ legalTexts }: LegalProps) {
  const [language, setLanguage] = useState<LegalLanguages>('en')

  const legalText = legalTexts.find((text) => text.slug === language)
  const conditionalButtonStyles = (lang: LegalLanguages) => {
    return language === lang ? 'text-primary-500' : ''
  }

  return (
    <>
      <div className="mb-8 flex">
        <button
          onClick={() => setLanguage('de')}
          className={`mr-4 text-xl transition-all hover:text-primary-500 ${conditionalButtonStyles(
            'de'
          )}`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`text-xl transition-all hover:text-primary-500 ${conditionalButtonStyles(
            'en'
          )}`}
        >
          EN
        </button>
      </div>
      <div className="prose dark:prose-invert">
        <MDXLayoutRenderer code={legalText?.body.code || ''} />
      </div>
    </>
  )
}
