import { getAllTopics } from '@/actions/topicActions'
import TopicList from '@/components/TopicList'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'WebDev Topics | MongoDB CRUD Example',
  description: 'A simple CRUD application using Next.js and MongoDB',
}

export default async function Home() {
  //서버 액션 함수 메인 화면에 모두 표시
  const { topics } = await getAllTopics()

  return (
    <main className="between-justify item-center px-20">
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD Example</p>
      <Suspense fallback={<div>로딩 중...</div>}>
        {/* 이렇게 불러올 수 있음! TopicList.tsx를 */}
        <TopicList topics={topics} />
      </Suspense>
    </main>
  )
}
