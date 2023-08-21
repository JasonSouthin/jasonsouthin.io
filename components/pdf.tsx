"use client"

import { EmbedPDF } from "@simplepdf/react-embed-pdf"

const PdfViewer = ({ title, src }: Pdf) => {
  return (
    <EmbedPDF>
      <a href={src} rel="noopener noreferrer" target="_blank">
        {title}
      </a>
    </EmbedPDF>
  )
}

export default PdfViewer
