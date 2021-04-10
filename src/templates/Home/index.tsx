import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const DynamicMap = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Travel Web"
        description="A simple project to travel around some spots in the world."
        canonical=""
        openGraph={{
          url: '',
          title: 'Travel Web',
          description:
            'A simple project to travel around some spots in the world.',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Travel Web'
            }
          ],
          site_name: 'Travel Web'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <DynamicMap places={places} />
    </>
  )
}
