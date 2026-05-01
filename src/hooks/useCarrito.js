import { useState } from 'react'

export function useCarrito() {
  const [carrito, setCarrito] = useState([])

  const agregar = (tipo, valor) => {
    if (!valor) return
    setCarrito(prev => [...prev, { tipo, valor }])
  }

  const eliminar = (index) => {
    setCarrito(prev => prev.filter((_, i) => i !== index))
  }

  return { carrito, agregar, eliminar }
}