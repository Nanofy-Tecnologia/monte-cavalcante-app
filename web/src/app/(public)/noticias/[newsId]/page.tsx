'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoChevronBack } from 'react-icons/io5'

import { api } from '@/lib/axios'
import Container from '@/components/Container'

type NewsContentProps = {
  params: {
    newsId: string
  }
}

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

export default function NewsContent({ params }: NewsContentProps) {
  const { newsId } = params

  const [news, setNews] = useState<News | null>(null)

  const loadingNews = async () => {
    try {
      const response = await api.get(`/post/${newsId}`)

      setNews(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingNews()
  }, [])

  if (!news) return

  return (
    <section className="py-8">
      <Container>
        <div className="mb-8 mt-0">
          <Link
            href="/noticias"
            className="flex items-center gap-1 font-bold hover:opacity-80"
          >
            <IoChevronBack className="text-2xl" />
            Voltar
          </Link>
        </div>

        <div className="space-y-8">
          <h1 className="text-2xl font-bold">{news?.title}</h1>

          {news?.coverURL && (
            <Image
              width={1024}
              height={720}
              src={
                'https://gtreqzctrqppqncegkpw.supabase.co/storage/v1/object/public/monte_cavalcante_bucket/' +
                news?.coverURL
              }
              alt=""
              className="max-h-[520px] rounded-lg object-cover"
            />
          )}

          <div
            className="tinymce"
            dangerouslySetInnerHTML={{ __html: news?.content }}
          ></div>
        </div>
      </Container>
    </section>
  )
}
