import CoverImage from 'components/CoverImage'

export default function PostTitle({ children }) {
  return (
    <h1 className="mb-2 ml-4 text-3xl font-bold text-left md:text-4xl md:leading-none lg:text-6xl">
      {children}
    </h1>
  )
}
