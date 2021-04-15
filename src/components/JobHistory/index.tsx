import { Heading, List, Text } from '@dracula/dracula-ui'

export const JobHistory: React.VFC = () => {
  return (
    <>
      <Heading color="purpleCyan" size="md">
        Job History
      </Heading>
      <List variant="unordered" color="purple" className="pl-4 md:pl-6">
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Front-end Development Tech Lead</Text>{' '}
          <Text className="block md:inline-block">@ 9xb</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Software Developer</Text>{' '}
          <Text className="block md:inline-block">@ Intelligence Fusion</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Head of Front-end Development</Text>{' '}
          <Text className="block md:inline-block">@ 9xb</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text className="block md:inline-block">@ 9xb</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text className="block md:inline-block">@ Awaze</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text className="block md:inline-block">@ Lead Tech</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Software Developer</Text>{' '}
          <Text className="block md:inline-block">@ CPOMS Systems Ltd</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">IT Support Technician</Text>{' '}
          <Text className="block md:inline-block">@ Meritec Limited</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Analytical Chemist</Text>{' '}
          <Text className="block md:inline-block">
            @ Keighley Laboratories Limited
          </Text>
        </li>
      </List>
    </>
  )
}
