"use client"

import { useId, useState } from "react"
import { faqs } from "@/content/sitio"

export function FaqList() {
  const base = useId()
  const [abierta, setAbierta] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {faqs.map((item, indice) => {
        const abiertaEsta = abierta === indice
        const panelId = `${base}-panel-${indice}`
        return (
          <div
            key={item.pregunta}
            className={abiertaEsta ? "faq faq-abierta" : "faq"}
          >
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={abiertaEsta}
              aria-controls={panelId}
              onClick={() => setAbierta(abiertaEsta ? null : indice)}
            >
              <span>{item.pregunta}</span>
              <span className="faq-icono" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="16" height="16">
                  <path d="M6 16h20" />
                  <path className="faq-vertical" d="M16 6v20" />
                </svg>
              </span>
            </button>
            <div
              className="faq-panel"
              id={panelId}
              role="region"
              aria-hidden={!abiertaEsta}
            >
              <div>
                <p>{item.respuesta}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
