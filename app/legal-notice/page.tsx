import { genPageMetadata } from 'app/seo'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { LegalNotice, allLegalNotices } from 'contentlayer/generated'
import Legal from '@/components/Legal'

export const metadata = genPageMetadata({ title: 'Legal Notice' })

export default function Page() {
  const legalNoticeDE = allLegalNotices.find((p) => p.slug === 'de') as LegalNotice
  const legalNoticeEN = allLegalNotices.find((p) => p.slug === 'en') as LegalNotice

  return <Legal legalTexts={allLegalNotices} />
}
