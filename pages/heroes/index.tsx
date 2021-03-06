import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { Container, SimpleGrid } from '@chakra-ui/react'

import { appApi } from '@services/axios';
import { handleHeroImage } from '@providers/hero.provider';

interface IHeroPageProps {
  heroes: any[];
}

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Heroes: NextPage<IHeroPageProps> = ({ heroes }) => {
  return (
    <>
      <Head>
        <title>Dota Help</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Heroes

        <SimpleGrid minChildWidth='120px' spacing={10}>
          {heroes.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          }).map(hero => (
            <Link
              key={hero.id}
              href={`/heroes/${hero.id}`}
              passHref
            >
              <div>
                <Image
                  src={handleHeroImage(hero.name, 'large')}
                  loader={myLoader}
                  width={200}
                  height={120}
                  layout="responsive"
                  alt={hero.name}
                />
                {hero.localized_name}
              </div>
            </Link>
          ))}
        </SimpleGrid>
      </main>
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const { data: { result: { heroes } } } = await appApi.get('/heroes/');

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      heroes,
    },
  }
}

export default Heroes;
