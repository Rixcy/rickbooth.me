import { Avatar, Box, Heading } from '@dracula/dracula-ui'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Header: React.VFC = () => {
  return (
    <Box className="flex w-full items-start md:items-center justify-between flex-row-reverse md:flex-row">
      <Box className="mr-4 md:mr-0 md:ml-4 w-full">
        <Box className="flex  md:items-center flex-col md:flex-row">
          <Heading size="xl" color="white" className="whitespace-nowrap">
            Rick Booth
          </Heading>
          <Box className="text-3xl md:ml-4">
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
        <Heading color="purpleCyan" className="text-lg md:text-2xl">
          Software Developer
        </Heading>
      </Box>
      <Box className="mr-4 md:mr-0">
        <Avatar
          src="https://github.com/Rixcy.png"
          title="Count Dracula"
          borderVariant="large"
          color="purple"
        />
      </Box>
    </Box>
  )
}
