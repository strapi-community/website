import { useCallback, useEffect, useState } from "react"

export const useWindowScroll = () => {
  const [scrollY, setscrollY] = useState<number>(0)
  const handleScroll = useCallback(
    () => {
      setscrollY(()=>window.scrollY)
    },
    [],
  )

  useEffect(() => {
    document.addEventListener("load",handleScroll)
    document.addEventListener("scroll",handleScroll)
    return () => {
      document.removeEventListener("load",handleScroll)
      document.removeEventListener("scroll",handleScroll )
    }
  }, [handleScroll])
  return {scrollY}
}