import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      // Use the exact mouse coordinates without any offset calculations
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      e.preventDefault()
      setIsHovering(true)
    }
    
    const handleMouseLeave = (e) => {
      e.preventDefault()
      setIsHovering(false)
    }

    // Add event listeners for cursor position
    document.addEventListener('mousemove', updatePosition, { passive: true })

    // Add event listeners for hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: false })
      el.addEventListener('mouseleave', handleMouseLeave, { passive: false })
    })

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Only show on desktop devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (isMobile) return null

  return (
    <>
      {/* Main cursor - fixed positioning */}
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-150 ease-out ${
          isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
          width: '20px',
          height: '20px',
          background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
          borderRadius: '50%',
          mixBlendMode: 'difference'
        }}
      />
    </>
  )
}

export default CustomCursor

