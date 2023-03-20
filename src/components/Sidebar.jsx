import React from 'react'
import './SideBar.css'

function SideBar() {
  const items = [
    {
      theme: 'Ajustes',
      items: ['Temas', 'Todas las configuraciones', 'Atajos de búsqueda !Bang'],
    },
    {
      theme: 'Esenciales de privacidad',
      items: ['Busqueda Privada', 'App y Extensión'],
    },
    {
      theme: 'Por qué privacidad',
      items: [
        'Blog sobre Privacidad',
        'Boletín Informativo de Privacidad',
        'Ayuda a Difundir la Privacidad',
      ],
    },
    {
      theme: 'Quiénes somos',
      items: [
        'Sobre Nosotros',
        'Política de Privacidad',
        'Oportunidades de Trabajo',
        'Kit de Prensa',
      ],
    },
    {
      theme: 'Mantén el contacto',
      items: ['Twitter', 'Reddit', 'Ayuda'],
    },
  ]

  return (
    <div>
      <ul className="sidebar-menulist">
        {items.map((item) => (
          <ul className="sidebar-group" key={item.value}>
            <li className="sidebar-theme">{item.themluee}</li>
            {/* eslint-disable-next-line no-shadow */}
            {item.items.map((item) => (
              <li className="sidebar-item" key={item.value}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
