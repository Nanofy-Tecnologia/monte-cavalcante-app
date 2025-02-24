'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { api } from '@/lib/axios'
import Container from '@/components/Container'

type News = {
  id: string
  title: string
  content: string
  coverURL: string
  authorId: string
  createdAt: string
  updatedAt: string
  published: boolean
}

export default function News() {
  const [news, setNews] = useState<News[]>([])

  const loadingNews = async () => {
    try {
      const response = await api.get('/post/published')

      setNews(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingNews()
  }, [])

  return (
    <section className="min-h-screen py-8">
      <Container>
        <div className="grid w-full grid-cols-1 gap-6 py-8 sm:grid-cols-2 md:grid-cols-3">
          {news.length === 0 ? (
            <div className="col-span-3 flex items-center justify-center">
              <h3 className="text-2xl">
                No momento, não contamos com nenhum conteúdo disponível.
              </h3>
            </div>
          ) : (
            news.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.id}`}
                className="flex flex-col overflow-hidden rounded-md bg-neutral-100 shadow transition-transform hover:scale-105"
              >
                <div className="h-56">
                  <Image
                    width={300}
                    height={300}
                    alt={item.title}
                    src={
                      'https://gtreqzctrqppqncegkpw.supabase.co/storage/v1/object/public/monte_cavalcante_bucket/' +
                      item.coverURL
                    }
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-4 p-4">
                  <h2 className="text-xl">{item.title}</h2>

                  <div
                    className="text-justify"
                    dangerouslySetInnerHTML={{
                      __html:
                        item.content.split(' ').slice(0, 20).join(' ') + '...',
                    }}
                  ></div>
                </div>

                <h5 className="p-4 text-sm">
                  Publicado {dayjs(item.createdAt).format('DD/MM/YYYY HH:mm')}
                </h5>
              </Link>
            ))
          )}
        </div>
      </Container>
    </section>
  )
}
