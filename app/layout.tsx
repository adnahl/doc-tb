import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'

export const metadata = {
	title: 'Documentación - Tu Banca',
	description: 'Documentación oficial de Tu Banca.',
}

const banner = (
	<Banner storageKey="some-key">Documentación oficial de Tu Banca.</Banner>
)
const navbar = (
	<Navbar
		logo={<b>Tu Banca</b>}
		logoLink={'https://doc.tubanca.vip'}
		projectLink="https://github.com/adnahl/doc-tb"
		// chatLink="https://discord.gg/"
	/>
)
const footer = (
	<Footer>
		Todos los derechos reservados {new Date().getFullYear()} © Tu Banca.
	</Footer>
)

const search = <Search placeholder="Buscar.."></Search>

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="es" dir="ltr" suppressHydrationWarning>
			<Head
				color={{
					hue: {
						dark: 145,
						light: 145,
					},
					saturation: {
						dark: 60,
						light: 60,
					},
					lightness: {
						dark: 50,
						light: 30,
					},
				}}
			/>
			<body>
				<Layout
					banner={banner}
					navbar={navbar}
					pageMap={await getPageMap()}
					docsRepositoryBase="https://github.com/adnahl/doc-tb/edit/staff"
					footer={footer}
					search={search}
				>
					{children}
				</Layout>
			</body>
		</html>
	)
}
