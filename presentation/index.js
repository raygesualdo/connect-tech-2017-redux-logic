import React from 'react'
import {
  Appear,
  BlockQuote,
  Code,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'
import styled from 'styled-components'
import Remarkable from 'remarkable'
const md = new Remarkable()

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const images = {
  logoFE: require('../assets/freshember-ember.png'),
  logoGotchee: require('../assets/gotchee-logo.svg'),
  logoRL: require('../assets/rl.svg'),
  logo3blades: require('../assets/3blades.svg'),
  elTigre: require('../assets/el-tigre.gif'),
  legos: require('../assets/legos.jpg'),
  map: require('../assets/topographical-map.png'),
  pretzel: require('../assets/pretzel-process.gif'),
  processDawg: require('../assets/process-dawg.jpg'),
  sideEffects: require('../assets/side-effects.jpg'),
  transformers: require('../assets/transformers.gif'),
}

preloader(images)

// From https://github.com/JesseLeite/an-old-hope-syntax-atom/blob/master/styles/colors.less
const theme = createTheme(
  {
    primary: '#1c1d21',
    secondary: '#ef7c2a',
    tertiary: '#4fb4d8',
    quarternary: '#eb3d54',
  },
  {
    primary: 'Montserrat',
    secondary: 'Source Sans Pro',
  },
)

export default function Presentation() {
  return (
    <Deck
      transition={['slide']}
      transitionDuration={600}
      progress="bar"
      theme={theme}
      controls={false}
      contentWidth={1800}
      contentHeight={1000}
    >
      <Slide bgColor="tertiary">
        {/* Image needed */}
        <Heading caps lineHeight={1.4} textColor="primary">
          Tame the Async Redux Beast with redux-logic
        </Heading>
      </Slide>
      <Slide>
        <Heading lineHeight={1.4}>Ray Gesualdo</Heading>
        <Logos>
          <Appear>
            <Image
              src={images.logoFE}
              height={150}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
          <Appear>
            <Image
              src={images.logoGotchee}
              height={170}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
          <Appear>
            <Image
              src={images.logoRL}
              height={130}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
          <Appear>
            <Image
              src={images.logo3blades}
              height={150}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
        </Logos>
      </Slide>
      <Slide>
        <Heading fit>Opportunity</Heading>
      </Slide>
      <Slide>
        <Heading fit>Async Redux?</Heading>
        <Notes>
          {md.render(`
Redux recap
- Synchronous
- Pure
          `)}
        </Notes>
      </Slide>
      <Slide bgImage={images.sideEffects}>
        <Notes>
          {md.render(`
- HTTP Calls
- Listening to a WebSocket
- Interacting with Browser APIs
- Adding GUIDs to actions
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading fit>Criteria</Heading>
        <Notes>
          {md.render(`
Must Haves
- Low barrier of entry
- Flexibility
Nice to Haves
- Declaritive config
- Little boilerplate
          `)}
        </Notes>
      </Slide>
      <Slide bgImage={images.map} bgDarken={0.75}>
        <Heading fit>Lay of the Land</Heading>
        <Notes>
          {md.render(`
- Thunks (Promises)
- Sagas (Generators)
- Observables (RxJS)
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading lineHeight={1.2} caps fit>
          Redux-logic
        </Heading>
        <Link
          href="https://github.com/jeffbski/redux-logic"
          lineHeight={1.25}
          textColor="secondary"
        >
          https://github.com/jeffbski/redux-logic
        </Link>
        <Notes>
          {md.render(`
- Write your logic any way you want
- Declarative action type filtering
- Declarative cancellation, limiting, debouncing, throttling
- Access to actions before they hit reducers
- Auto-dispatching of return values
- Dependency injection
          `)}
        </Notes>
      </Slide>
      <Slide bgImage={images.legos} bgDarken={0.8}>
        <Heading fit caps>
          Setup
        </Heading>
      </Slide>
      <Slide className="code-pane">
        <Layout>
          <Fill />
          <Fill>
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/setup.example.js')}
            />
          </Fill>
          <Fill />
        </Layout>
      </Slide>
      <CodeSlide
        className="code-slide"
        lang="js"
        code={require('raw-loader!../assets/setup.example.js')}
        ranges={[
          { loc: [0, 1] },
          { loc: [1, 2] },
          { loc: [2, 3] },
          { loc: [3, 4] },
          { loc: [4, 5] },
          { loc: [6, 7] },
          { loc: [8, 13] },
        ]}
      />
      <Slide>
        <Heading lineHeight={1.4} caps>
          Transform<br />
          Validate<br />
          Process
        </Heading>
      </Slide>
      <Slide>
        <Image src={images.transformers} width={700} />
        <Heading lineHeight={1.4} caps>
          Transform
        </Heading>
      </Slide>
      <Slide className="code-pane">
        <Layout>
          <Fill />
          <Fill>
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/transform.example.js')}
            />
          </Fill>
          <Fill />
        </Layout>
      </Slide>
      <CodeSlide
        className="code-slide"
        lang="js"
        code={require('raw-loader!../assets/transform.example.js')}
        ranges={[
          { loc: [0, 1] },
          { loc: [1, 2] },
          { loc: [3, 12] },
          { loc: [3, 4] },
          { loc: [4, 11] },
          { loc: [4, 5] },
          { loc: [5, 11] },
          { loc: [5, 6] },
          {
            loc: [5, 6],
            note:
              'First argument is an object containing the dispatched action, getState(), and injected dependencies.',
          },
          { loc: [6, 9] },
          { loc: [9, 10] },
          { loc: [4, 11] },
        ]}
      />
      <Slide>
        <Image src={images.elTigre} width={900} />
        <Heading lineHeight={1.4} caps>
          Validate
        </Heading>
      </Slide>
      <Slide className="code-pane">
        <Layout>
          <Fill />
          <Fill>
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/validate.example.js')}
            />
          </Fill>
          <Fill />
        </Layout>
      </Slide>
      <CodeSlide
        className="code-slide"
        lang="js"
        code={require('raw-loader!../assets/validate.example.js')}
        ranges={[
          { loc: [0, 1] },
          { loc: [2, 10] },
          { loc: [3, 4] },
          { loc: [4, 9] },
          { loc: [4, 5] },
          { loc: [5, 6] },
          { loc: [6, 7] },
          { loc: [7, 8] },
          { loc: [3, 9] },
        ]}
      />
      <Slide>
        <Image src={images.pretzel} width={900} />
        <Heading lineHeight={1.4} caps>
          Process & Async/Await
        </Heading>
      </Slide>
      <Slide className="code-pane">
        <Layout>
          <Fill />
          <Fill>
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/process-01.example.js')}
            />
          </Fill>
          <Fill />
        </Layout>
      </Slide>
      <CodeSlide
        className="code-slide"
        lang="js"
        code={require('raw-loader!../assets/process-01.example.js')}
        ranges={[
          { loc: [0, 2] },
          { loc: [3, 18] },
          { loc: [4, 5] },
          { loc: [5, 6] },
          { loc: [6, 17] },
          { loc: [6, 7] },
          { loc: [7, 16] },
          { loc: [8, 9] },
          { loc: [9, 10] },
          { loc: [10, 11] },
          { loc: [11, 12] },
          { loc: [12, 13] },
          { loc: [13, 14] },
          { loc: [15, 16] },
          { loc: [4, 17] },
        ]}
      />
      <Slide>
        <Image src={images.processDawg} width={900} />
        <Heading lineHeight={1.4} caps>
          Process & Promises
        </Heading>
      </Slide>
      <Slide className="code-pane">
        <Layout>
          <Fill />
          <Fill>
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/process-02.example.js')}
            />
          </Fill>
          <Fill />
        </Layout>
      </Slide>
      <CodeSlide
        className="code-slide"
        lang="js"
        code={require('raw-loader!../assets/process-02.example.js')}
        ranges={[
          { loc: [0, 2] },
          { loc: [3, 15] },
          { loc: [4, 5] },
          { loc: [5, 6] },
          { loc: [6, 7] },
          { loc: [7, 11] },
          { loc: [8, 9] },
          { loc: [9, 10] },
          { loc: [11, 15] },
          { loc: [12, 14] },
          { loc: [4, 15] },
        ]}
      />
      <Slide>
        <Heading caps>More To Learn</Heading>
        <List>
          <Appear>
            <ListItem textSize="6vh">
              Multiple actions types and type RegEx
            </ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="6vh">Throttling</ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="6vh">Handling observables</ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="6vh">Dispatching multiple times</ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="6vh">
              Adding/merging/replacing logic at runtime
            </ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="6vh">Adding dependencies at runtime</ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="6vh">Testing</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading caps lineHeight={1.4} textColor="primary">
          Tame the Async Redux Beast with redux-logic
        </Heading>
      </Slide>
      <Slide>
        <Heading fit lineHeight={1.4}>
          <Link href="https://rayg.me/hansolo" textColor="secondary">
            rayg.me/hansolo
          </Link>
        </Heading>
        <Link
          href="https://twitter.com/raygesualdo"
          textColor="quarternary"
          textSize="7vh"
        >
          @raygesualdo
        </Link>
        <br />
        <Link
          href="https://github.com/raygesualdo"
          textColor="quarternary"
          textSize="7vh"
        >
          github.com/raygesualdo
        </Link>
        <br />
        <Link
          href="https://raygesualdo.com"
          textColor="quarternary"
          textSize="7vh"
        >
          raygesualdo.com
        </Link>
      </Slide>
      <Slide>
        <Heading>Resources</Heading>
        <List lineHeight={2}>
          <ListItem>
            <Link
              href="https://github.com/jeffbski/redux-logic"
              textColor="secondary"
            >
              redux-logic GitHub repo<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://github.com/jeffbski/redux-logic-test"
              textColor="secondary"
            >
              redux-logic-test GitHub repo<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://medium.com/@jeffbski/where-do-i-put-my-business-logic-in-a-react-redux-application-9253ef91ce1"
              textColor="secondary"
            >
              Blog Post: Where do I put my business logic in a React-Redux
              application?<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="http://codewinds.com/blog/2016-11-20-nodevember-redux-logic.html"
              textColor="secondary"
            >
              Video: The story of redux-logic, a new approach to organizing
              business logic with Redux - Nodevember Conf Video 2016<br />&nbsp;
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  )
}
