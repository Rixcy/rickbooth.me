import Head from 'next/head'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTransition, animated } from 'react-spring'

export default function Home() {
  const ref = useRef([])
  const [items, setItems] = useState<any[]>([])

  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#bd93f9' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#ff79c6' }, { opacity: 0, height: 0 }],
    update: { color: '#50fa7b' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    setItems([])
    ref.current.push(setTimeout(() => setItems(['Next.js', 'Starter']), 1000))
    ref.current.push(
      setTimeout(() => setItems(['Next.js', 'TypeScript', 'Starter']), 2000),
    )
    ref.current.push(setTimeout(() => setItems(['Next.js', 'Starter']), 5000))
    ref.current.push(
      setTimeout(() => setItems(['Next.js', 'StoryBook', 'Starter']), 8000),
    )
    ref.current.push(setTimeout(() => setItems(['Next.js', 'Starter']), 10000))
    ref.current.push(
      setTimeout(() => setItems(['Next.js', 'TailwindCSS', 'Starter']), 12000),
    )
    ref.current.push(setTimeout(() => setItems(['Next.js', 'Starter']), 13000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <a
      href="https://github.com/Rixcy/nextjs-starter"
      rel="nofollow noreferrer"
      className="block"
    >
      <Head>
        <title>Create Next App</title>
      </Head>

      <main
        className="mx-auto h-screen overflow-hidden m-0 p-0 relative w-full flex justify-center items-center max-w-xs flex-col"
        style={{ maxWidth: '450px' }}
      >
        {transitions.map(({ item, props: rest, key }) => (
          <animated.div
            className="overflow-hidden w-full flex justify-start align-center text-4xl lg:text-6xl font-extrabold uppercase whitespace-no-wrap"
            key={key}
            style={{ ...rest, willChange: 'transform opacity height' }}
            onClick={reset}
          >
            <animated.div style={{ overflow: 'hidden', height: '80px' }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </main>
    </a>
  )
}
