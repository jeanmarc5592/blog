import { allPrivacyPolicies } from 'contentlayer/generated'
import Legal from '@/components/Legal'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Privacy Policy' })

export default function Page() {
  return <Legal legalTexts={allPrivacyPolicies} />
}
