import { genPageMetadata } from 'app/seo'
import { allLegalNotices } from 'contentlayer/generated'
import Legal from '@/components/Legal'

export const metadata = genPageMetadata({ title: 'Legal Notice' })

export default function Page() {
  return <Legal legalTexts={allLegalNotices} />
}
