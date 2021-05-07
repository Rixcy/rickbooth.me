import { Paragraph } from '@dracula/dracula-ui'
import ReactTooltip from 'react-tooltip'

export const About: React.VFC = () => {
  return (
    <>
      <Paragraph className="mt-0">
        I'm a 26 year old software developer from{' '}
        <a
          data-tip
          data-for="skipton"
          className="underline cursor-pointer"
          style={{
            textDecorationColor: '#9580ff',
          }}
        >
          Skipton, England
        </a>
        . I specialise in front end web development but have a full stack
        background and dabble in full stack in my spare time using a
        GraphQL/Nexus/Prisma stack.
      </Paragraph>
      <Paragraph>
        I built my first website when I was 10 years old by finding a template
        online, purchasing a domain with hosting and uploading files I edited in
        Adobe Dreamweaver via CPanel. It had all the cool things like scrolling
        text and music playing in the background.
      </Paragraph>
      <Paragraph>
        Roll on 16 years and I've competed at Great Britain level for Canoe
        Slalom at a junior level, played the Walter White character by working
        in chemistry for 3 years, supported schools by being a first, second and
        third line support engineer, and eventually self taught myself Ruby on
        Rails to land a University level position as a Software Developer.
      </Paragraph>
      <Paragraph>
        From starting out in the front end development industry by building
        dashboard level features for a back end Ruby on Rails application, I
        progressed to architecturing a Vue front end with a headless WordPress
        back end stack on to architecturing an award winning React/TypeScript
        stack which implemented component driven development complimented by
        Storybook.
      </Paragraph>
      <Paragraph>
        I'm now working as a front end tech lead for a company called{' '}
        <a
          data-tip
          data-for="9xb"
          className="underline cursor-pointer"
          style={{
            textDecorationColor: '#9580ff',
          }}
        >
          9xb
        </a>{' '}
        based in{' '}
        <a
          data-tip
          data-for="leeds"
          className="underline cursor-pointer"
          style={{
            textDecorationColor: '#9580ff',
          }}
        >
          Leeds
        </a>
        . I help drive the front end team forward ensuring we're using the most
        powerful tools available to build and maintain next generation websites.
      </Paragraph>

      <ReactTooltip id="skipton" backgroundColor="#9580ff">
        <Paragraph className="my-2 max-w-sm">
          Skipton (also known as Skipton-in-Craven) is a market town and civil
          parish in the Craven district of North Yorkshire, England.
        </Paragraph>
      </ReactTooltip>

      <ReactTooltip id="9xb" backgroundColor="#9580ff">
        <Paragraph className="my-2 max-w-sm">
          9xb are an award winning eCommerce agency, specialising in B2B and D2C
          complex eCommerce builds and onsite performance, maximising
          conversions and increasing online sales.
        </Paragraph>
      </ReactTooltip>

      <ReactTooltip id="leeds" backgroundColor="#9580ff">
        <Paragraph className="my-2 max-w-sm">
          Leeds is the largest city in the county of West Yorkshire, England and
          the most populous in the Yorkshire and Humber region. Leeds is the
          cultural, financial and commercial heart of the West Yorkshire
          Built-up Area (2011 census classification), the UK's fourth-most
          populous urban area with a reported population of 1.8 million in 2013.
        </Paragraph>
      </ReactTooltip>
    </>
  )
}
