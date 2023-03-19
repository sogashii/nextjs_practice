import Link from "next/link";

type User = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface Props {
    posts: User[];
}

export default function index({ posts }: Props) {
    return (
        <div>
            <h1>POST一覧</h1>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// export async function getServerSideProps() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const posts = await res.json();
//     console.log(posts);
//     return { props: { posts } };
// }

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    return { props: { posts } };
}

// export async function getStaticPaths() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const posts = await res.json();
//     const paths = posts.map((post: any) => `/posts/${post.id}`);
//     return {
//         paths,
//         fallback: false,
//     };
// }