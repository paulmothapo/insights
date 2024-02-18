import Link from 'next/link';
import Image from 'next/image';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <p>{post.date}</p>
          {post.coverImage && (
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image
                src={post.coverImage.url} 
                alt={post.coverImage.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <p>{post.excerpt}</p>
          <p>Author: {post.author.name}</p>
          {post.tags && post.tags.length > 0 && (
            <ul>
              Tags:{' '}
              {post.tags.map((tag) => (
                <li key={tag.slug}>
                  <Link href={`/tags/${tag.slug}`}>
                    <a>{tag.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;

