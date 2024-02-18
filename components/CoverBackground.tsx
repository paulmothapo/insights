import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import PostTitle from './PostTitle' 
import Date from 'components/PostDate'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, date } = props;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    
  };

  const titleStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const image = source?.asset?._ref ? (
    <div className="sm:hidden">
      <div style={containerStyle} className="sm:block">
        <Image
          className="mt-3"
          width={1000}
          height={600}
          alt={`Cover Image for ${title}`}
          src={urlForImage(source).height(600).width(1000).url()}
          sizes="100vw"
          priority={priority}
        />
        <div className='' style={titleStyle}>
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
  
  const imageLargeScreen = source?.asset?._ref ? (
    <div className="hidden sm:block">
      <div style={containerStyle}>
        <Image
          className="mt-3"
          width={1600}
          height={600}
          alt={`Cover Image for ${title}`}
          src={urlForImage(source).height(600).width(1600).url()}
          sizes="100vw"
          priority={priority}
        />
        <div className='' style={titleStyle}>
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );

  
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
          {imageLargeScreen}
        </Link>
      ) : (
        <>
          {image}
          {imageLargeScreen}
        </>
      )}
    </div>
  );
  
}