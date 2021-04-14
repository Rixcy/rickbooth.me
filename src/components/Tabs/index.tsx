import { Tabs as DraculaTabs } from '@dracula/dracula-ui'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import cx from 'classnames'

export const Tabs: React.VFC = () => {
  const router = useRouter()

  const tabClasses = (link: string) =>
    cx('drac-tab', { 'drac-tab-active': router.pathname === link })

  return (
    <DraculaTabs color="purple" mb="md">
      <li className={tabClasses('/')}>
        <Link href="/" passHref>
          <a className="drac-tab-link drac-text">About</a>
        </Link>
      </li>
      <li className={tabClasses('/job-history')}>
        <Link href="/job-history" passHref>
          <a className="drac-tab-link drac-text">Job History</a>
        </Link>
      </li>
      <li className={tabClasses('/skills')}>
        <Link href="/skills" passHref>
          <a className="drac-tab-link drac-text">Skills</a>
        </Link>
      </li>
    </DraculaTabs>
  )
}
