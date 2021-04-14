import {
  Avatar,
  Box,
  Card,
  Divider,
  Heading,
  List,
  Text,
} from '@dracula/dracula-ui'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <Card
      variant="subtle"
      rounded="lg"
      p="md"
      borderColor="purple"
      className="max-w-5xl mx-auto sm:px-6 lg:px-8 mt-16"
    >
      <Box className="flex w-full items-center justify-between">
        <Box className="mr-4">
          <Box className="flex items-center">
            <Heading size="2xl" color="white">
              Rick Booth
            </Heading>
            <Box ml="md" className="text-3xl">
              <a
                href="https://github.com/Rixcy"
                target="_blank"
                rel="nofollow noreferrer"
                className="text-white mr-2"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rick-booth-480677119/"
                target="_blank"
                rel="nofollow noreferrer"
                className="text-white mr-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/rixcydev"
                target="_blank"
                rel="nofollow noreferrer"
                className="text-white mr-2"
              >
                <FaTwitter />
              </a>
            </Box>
          </Box>
          <Heading size="lg" color="purpleCyan">
            Software Developer
          </Heading>
        </Box>
        <Avatar
          src="https://github.com/Rixcy.png"
          title="Count Dracula"
          borderVariant="large"
          color="purple"
        />
      </Box>
      <Divider color="purple" my="md" />
      <Heading color="purpleCyan" size="md">
        Job History
      </Heading>
      <List variant="unordered" color="purple">
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Front-end Development Tech Lead</Text>{' '}
          <Text weight="semibold">@ 9xb</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Software Developer</Text>{' '}
          <Text weight="semibold">@ Intelligence Fusion</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Head of Front-end Development</Text>{' '}
          <Text weight="semibold">@ 9xb</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text weight="semibold">@ 9xb</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text weight="semibold">@ Awaze</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Web Developer</Text>{' '}
          <Text weight="semibold">@ Lead Tech</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Software Developer</Text>{' '}
          <Text weight="semibold">@ CPOMS Systems Ltd</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">IT Support Technician</Text>{' '}
          <Text weight="semibold">@ Meritec Limited</Text>
        </li>
        <li className="drac-text drac-text-white">
          <Text color="purpleCyan">Analytical Chemist</Text>{' '}
          <Text weight="semibold">@ Keighley Laboratories Limited</Text>
        </li>
      </List>
      <Divider color="purple" my="md" />
      <Heading color="purpleCyan" size="md">
        Skills/Tools
      </Heading>
      <List variant="unordered" color="purple">
        <li className="drac-text drac-text-white">
          <Text color="white">
            React, TypeScript, Next.JS, StoryBook, Jest, React Testing Library,
            Node, TailwindCSS, CSS-in-JS, Styled Components, GraphQL, Nexus,
            Prisma, Vue, Svelte, React Native
          </Text>{' '}
        </li>
      </List>
    </Card>
  )
}
