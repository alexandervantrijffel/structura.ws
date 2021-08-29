import Image from 'next/image'
import xw from 'xwind'
import ButtonReact from '../components/ButtonReact'

const Home = (): JSX.Element => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
      <ButtonReact
        onClick={() => {
          window.alert('Thanks for clicking')
        }}
      >
        @emotion/react
      </ButtonReact>
      <div>
        <a href="https://nextjs.org/docs">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/master/examples">
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
        </a>
      </footer>
    </div>
  </div>
)

export default Home
