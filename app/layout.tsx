import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const description: string = '';
  const title: string = '';
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="index, follow" />

        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />

        <meta name="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />

        <title>{title}</title>
      </head>
      <body>
        Root Layout
        {children}
      </body>
    </html>
  )
}
