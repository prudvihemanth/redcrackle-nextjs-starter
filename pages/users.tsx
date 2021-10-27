import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Users({users}) {
  return (
    <><h1 className={styles.title}>
      Next.js SSG with data
    </h1>
 

        <h3>Below are the list of Users:</h3>
    <ul>
        {users.map((user: any) => (
          <li key="{user.id}">{user.name}</li>
        ))}
      </ul>
      <h2>
        <Link href="/">
        <button type="button" className="btn btn-primary">Back to Home page</button>
        </Link>
        </h2></>
  ) 
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users: users
    },
  }
}


export default Users;

