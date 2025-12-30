import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import YouTube from './components/mdx/youtube'

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
	return {
		...themeComponents,
		...components,
		YouTube,
	}
}
