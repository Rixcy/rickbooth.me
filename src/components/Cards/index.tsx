import { Box } from '@dracula/dracula-ui'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

export type CardsProps = {
  showDarkVariants: boolean
}

export const Cards: React.VFC<CardsProps> = ({ showDarkVariants }) => {
  return (
    <Box className="flex flex-col lg:flex-row justify-around">
      <div className="drac-box drac-rounded-2xl mr-4 mb-6 drac-bg-black-secondary w-full lg:w-2/5">
        <div className="drac-box drac-bg-pink-purple rounded-t-2xl w-full h-48 justify-center items-center flex">
          <Image
            src={showDarkVariants ? '/one-dark.png' : '/one-light.png'}
            width="250px"
            height="150px"
          />
        </div>
        <div className="drac-box drac-p-md">
          <Box className="flex justify-between items-center">
            <h2 className="drac-heading drac-heading-lg drac-text-white">
              V1 -{' '}
              <a
                href="https://one.rickbooth.me"
                className="drac-text drac-text-white"
                target="_blank"
              >
                one.rickbooth.me
              </a>
            </h2>
            <a
              href="https://github.com/Rixcy/rickbooth.me"
              className="text-white flex text-lg"
              target="_blank"
            >
              <FaGithub size="20px" />
            </a>
          </Box>
          <p className="drac-text drac-line-height-lg drac-text-white drac-mt-sm">
            Built in{' '}
            <span className="drac-text drac-line-height drac-text-pink-purple">
              Gatsby
            </span>{' '}
            using{' '}
            <span className="drac-text drac-line-height drac-text-pink-purple">
              tailwindcss
            </span>{' '}
            with a dark mode toggle and simple design.
          </p>
        </div>
      </div>
      <div className="drac-box drac-rounded-2xl mr-4 mb-6 drac-bg-black-secondary w-full lg:w-2/5">
        <div className="drac-box drac-bg-purple-cyan rounded-t-2xl w-full h-48 justify-center items-center flex">
          <Image
            src={showDarkVariants ? '/two-dark.png' : '/two-light.png'}
            width="250px"
            height="150px"
          />
        </div>
        <div className="drac-box drac-p-md">
          <Box className="flex justify-between items-center">
            <h2 className="drac-heading drac-heading-lg drac-text-white">
              V2 -{' '}
              <a
                href="https://two.rickbooth.me"
                className="drac-text drac-text-white"
                target="_blank"
              >
                two.rickbooth.me
              </a>
            </h2>
            <a
              href="https://github.com/Rixcy/old.rickbooth.me"
              className="text-white flex text-lg"
              target="_blank"
            >
              <FaGithub size="20px" />
            </a>
          </Box>
          <p className="drac-text drac-line-height-lg drac-text-white drac-mt-sm">
            Built in{' '}
            <span className="drac-text drac-line-height drac-text-purple-cyan">
              Gatsby
            </span>{' '}
            using{' '}
            <span className="drac-text drac-line-height drac-text-purple-cyan">
              tailwindcss
            </span>{' '}
            and{' '}
            <span className="drac-text drac-line-height drac-text-purple-cyan">
              remark
            </span>{' '}
            for rendering markdown to support blog posts.
          </p>
        </div>
      </div>
    </Box>
  )
}
