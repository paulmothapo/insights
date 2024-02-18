import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post-item">
      <Link href={`/posts/${post.slug}`} passHref>
        <a>
          <div className="post-image">
            {post.coverImage && (
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alt}
                width={300}
                height={200}
              />
            )}
          </div>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </a>
      </Link>
    </div>
  );
};

export default PostItem;
