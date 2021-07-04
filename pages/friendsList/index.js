import Link from 'next/link';
import styles from '../../styles/Friends.module.css'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props : { friends: data }
    }
}


const friendsList = ({friends}) => {
    return ( 
        <div>
    <h1>Friends List</h1> 
    {
        friends.map(item=>(
            <Link href={'/friendsList/' + item.id} key={item.id}>
                <a className={styles.single}> <h3>{item.name}</h3> </a>
            </Link>
        ))
    }
    </div>
    );
}
 
export default friendsList;