import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'


interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props;

  const image = source?.asset?._ref ? (
    <div
      className={cn('', {
        'transition-shadow duration-200': slug,
        'transform transition-transform duration-200 hover:scale-105': slug,
      })}
      style={{ 
        // boxShadow: '0px 0px 6px rgba(0, 0, 0, 0)',  
        display: 'flex',  
        alignItems: 'center',  
        justifyContent: 'center',  
        // borderRadius: '12px',  
        overflow: 'hidden',
      }}
    >
      <Image
        className=""
        width={800}  
        height={400} 
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(400).width(800).url()} 
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}