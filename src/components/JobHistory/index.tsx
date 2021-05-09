import { Anchor, List, Text } from '@dracula/dracula-ui'
import { Heading } from 'components/Heading'

type JobHistoryItem = {
  jobTitle: string
  link: string
  companyName: string
}

const jobHistory: JobHistoryItem[] = [
  {
    jobTitle: 'Front-end Development Tech Lead',
    companyName: '9xb',
    link: 'https://www.9xb.com',
  },
  {
    jobTitle: 'Software Developer',
    companyName: 'Intelligence Fusion',
    link: 'https://www.intelligencefusion.co.uk',
  },
  {
    jobTitle: 'Head of Front-end Development',
    companyName: '9xb',
    link: 'https://www.9xb.com',
  },
  {
    jobTitle: 'Web Developer',
    companyName: '9xb',
    link: 'https://www.9xb.com',
  },
  {
    jobTitle: 'Web Developer',
    companyName: 'Awaze',
    link: 'https://www.awaze.co.uk',
  },
  {
    jobTitle: 'Web Developer',
    companyName: 'Lead Tech',
    link: 'https://www.lead-tech.co.uk',
  },
  {
    jobTitle: 'Software Developer',
    companyName: 'CPOMS Systems Ltd',
    link: 'https://www.cpoms.co.uk',
  },
  {
    jobTitle: 'IT Support Technician',
    companyName: 'Meritec Limited',
    link: 'https://www.meritec.co.uk',
  },
  {
    jobTitle: 'Analytical Chemist',
    companyName: 'Keighley Laboratories Limited',
    link: 'https://www.keighleylabs.co.uk',
  },
]

export const JobHistory: React.VFC = () => {
  return (
    <>
      <Heading>Job History</Heading>
      <List variant="unordered" color="purple" className="pl-4 md:pl-6">
        {jobHistory.map((job) => (
          <JobHistoryItem key={job.jobTitle} {...job} />
        ))}
      </List>
    </>
  )
}

const JobHistoryItem: React.VFC<JobHistoryItem> = (props) => {
  const { companyName, link, jobTitle } = props
  return (
    <li className="drac-text drac-text-white">
      <Text color="purpleCyan">{jobTitle}</Text>{' '}
      <Text className="block md:inline-block">
        @{' '}
        <Anchor href={link} hoverColor="yellowPink" isExternal>
          {companyName}
        </Anchor>
      </Text>
    </li>
  )
}
