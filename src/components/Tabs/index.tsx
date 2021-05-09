import { Box, Divider, Heading, Tabs as DraculaTabs } from '@dracula/dracula-ui'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import cx from 'classnames'

export type Tab = {
  link: string
  text: string
}

export type TabsProps = {
  tabs?: Tab[]
}

export const TabArray: Tab[] = [
  { link: '/', text: 'About' },
  { link: '/job-history', text: 'Job History' },
  { link: '/skills', text: 'Skills' },
  { link: '/version-history', text: 'Version History' },
]

export const Tabs: React.VFC<TabsProps> = (props) => {
  const { tabs = TabArray } = props

  const router = useRouter()

  const tabClasses = (link: string) =>
    cx('drac-tab', { 'drac-tab-active': router.pathname === link })

  return (
    <>
      <Box mt="sm" mx="sm" className="md:hidden">
        <Heading size="sm">Navigation</Heading>
        <select
          defaultValue={router.pathname}
          className="drac-select mt-4 drac-select-purple"
          onChange={(e) => router.push(e.target.value)}
        >
          <option value="default" disabled={true}>
            Select option
          </option>
          {tabs.map((tab) => (
            <option key={tab.link} value={tab.link}>
              {tab.text}
            </option>
          ))}
        </select>
        <Divider color="purple" my="md" />
      </Box>
      <Box className="hidden md:block">
        <DraculaTabs color="purple" mb="md">
          {tabs.map((tab) => (
            <li key={tab.link} className={tabClasses(tab.link)}>
              <Link href={tab.link} passHref>
                <a className="drac-tab-link drac-text">{tab.text}</a>
              </Link>
            </li>
          ))}
        </DraculaTabs>
      </Box>
    </>
  )
}
