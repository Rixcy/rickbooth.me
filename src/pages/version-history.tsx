import { Box, Heading, Text } from '@dracula/dracula-ui'
import { Cards } from 'components/Cards'
import { useState } from 'react'

export default function VersionHistoryPage() {
  const [showDarkVariants, setShowDarkVariants] = useState(true)

  return (
    <>
      <Box className="flex justify-between w-full">
        <Heading size="lg">Version History</Heading>
        <Box>
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
      <Text as="p" className="drac-mb-md">
        Previous versions of my website
      </Text>

      <Cards showDarkVariants={showDarkVariants} />
    </>
  )
}
