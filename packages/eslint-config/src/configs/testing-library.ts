import type { Linter } from 'eslint'

import { GLOB_TEST } from '../globs'
import { testingLibraryPlugin } from '../plugins'

export const testingLibrary: Linter.FlatConfig[] = [
	{
		name: 'sdnsdev:testing-library',
		plugins: {
			'testing-library': testingLibraryPlugin
		},
		rules: {
			...testingLibraryPlugin.configs.react.rules
		},
		files: [GLOB_TEST]
	}
]
