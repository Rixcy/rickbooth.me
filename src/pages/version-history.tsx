import { Box, Text } from '@dracula/dracula-ui'
import { Cards } from 'components/Cards'
import { useState } from 'react'

export default function VersionHistoryPage() {
  const [showDarkVariants, setShowDarkVariants] = useState(true)

  return (
    <>
      <Box className="flex flex-col md:flex-row justify-between w-full">
        <h2 className="drac-heading drac-heading-lg drac-text-white">
          Version History
        </h2>
        <Box className="mt-2 md:mt-0">
          <input
            id="dark"
            name="dark"
            type="checkbox"
            className="drac-switch drac-checkbox drac-switch-purple mr-1"
            onChange={() => setShowDarkVariants(!showDarkVariants)}
            checked={showDarkVariants}
          />
          <label
            htmlFor="dark"
            className="drac-text drac-text-white select-none"
          >
            Show dark variants?
          </label>
        </Box>
      </Box>
      <Text as="p" className="mb-4 md:mb-6 lg:mb-8">
        Previous versions of my website
      </Text>

      <Cards showDarkVariants={showDarkVariants} />
    </>
  )
}
