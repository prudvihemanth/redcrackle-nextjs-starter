import styles from '../styles/Home.module.css'
import Link from 'next/link'

function States({states}) {
  return (
    <><h1 className={styles.title}>
      Next.js SSR with data coming from Mongodb Cluster
    </h1>
    
    <h3>Below are the list of States:</h3>

    <ul>
        {states.map((state: any) => (
          <li key="{state.city}">{state.city}</li>
        ))}
      </ul>
      <h2>
        <Link href="/">
        <button type="button" className="btn btn-primary">Back to Home page</button>

        </Link>
        </h2>
        </>

  ) 
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/states')
  const states = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      states: states.message
    },
  }
}


export default States;

