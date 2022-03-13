export default function Highlight({ children }) {
  return (
    <span className="hover:text-transparent bg-clip-text bg-gradient-to-r bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      {children}
    </span>
  )
}
