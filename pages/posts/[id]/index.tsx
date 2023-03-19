export default function post({ post }: any) {
    return (
        <div>
            <h1>POST(投稿){post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

// export async function getServerSideProps({ params }: any) {
//     const id = params.id;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const post = await res.json();
//     if (!Object.keys(post).length) {
//         return {
//             notFound: true,
//         };
//     }
//     return { props: { post } };
// }

export async function getStaticProps({ params }: any) {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return { props: { post } };
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    const paths = posts.map((post: any) => `/posts/${post.id}`);
    return {
        paths,
        fallback: false,
    };
}