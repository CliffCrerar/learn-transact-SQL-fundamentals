process.env.NODE_ENV='staging';
module.exports = {
	base: '/',
	source: './',
	files: 'src/**/*.{md,markdown,mdx}',
	dest: 'ghpages',
	public: './public',
	editBranch: 'stage',
	menu: [
		'Home',
		'Introduction',
		{
			name: 'About', menu: [ 'About this page' ]
		},
		{
			name: 'SQL Setup Guide',
			menu: [ 'Getting Started', 'Creating the Demo Database' ]
		},
		{
			name: 'Before you start', menu: [
				'Concepts and Semantics',
				'Database Objects',
				'Data Types'
			]
		},
		{
			name: 'Writing SQL Part 1', menu: [
				'Data Query Language',
				'Data Definition Language',
				'Data Manipulation Language'
			]
		},
		{
			name: 'Extend your knowledge', menu: [
				'Query Execution Methods',
				'Using Comments'
			]
		},
		// {
		// 	name: 'Writing SQL Part 2', menu: []
		// },
		{
			name: 'Find out more', menu: [ 'Why Learn SQL?', 'What is a RDBMS?' ]
		},
		{
			name: '-Pages-under-construction'
		},
		{
			name: 'About the Author'
		},
		{
			name: 'Resources'
		}
	]
}