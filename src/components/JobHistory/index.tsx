import { Anchor, List, Text } from '@dracula/dracula-ui'
import { Heading } from 'components/Heading'

export const JobHistory: React.VFC = () => {
  const externalProps = {
    rel: 'nofollow noreferrer',
    target: '_blank',
  }

  return (
    <>
      <Heading>Job History</Heading>
      <List variant="unordered" color="purple" className="pl-4 md:pl-6">
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Front-end Development Tech Lead</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.9xb.com"
              {...externalProps}
              hoverColor="yellowPink"
            >
              9xb
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Software Developer</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.intelligencefusion.co.uk"
              {...externalProps}
              hoverColor="yellowPink"
            >
              Intelligence Fusion
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Head of Front-end Development</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.9xb.com"
              {...externalProps}
              hoverColor="yellowPink"
            >
              9xb
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.9xb.com"
              {...externalProps}
              hoverColor="yellowPink"
            >
              9xb
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.awaze.co.uk"
              {...externalProps}
              hoverColor="yellowPink"
            >
              Awaze
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.lead-tech.co.uk"
              {...externalProps}
              hoverColor="yellowPink"
            >
              Lead Tech
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Software Developer</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.cpoms.co.uk"
              {...externalProps}
              hoverColor="yellowPink"
            >
              CPOMS Systems Ltd
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">IT Support Technician</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.meritec.co.uk"
              {...externalProps}
              hoverColor="yellowPink"
            >
              Meritec Limited
            </Anchor>
          </Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Analytical Chemist</Text>{' '}
          <Text className="block md:inline-block">
            @{' '}
            <Anchor
              href="https://www.keighleylabs.co.uk"
              {...externalProps}
              hoverColor="yellowPink"
            >
              Keighley Laboratories Limited
            </Anchor>
          </Text>
        </li>
      </List>
    </>
  )
}
