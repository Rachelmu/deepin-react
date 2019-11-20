export const MenuConfig = [
	{
		iconType: 'file',
		title: '首页',
		route: '/home'
	},
	{
		iconType: 'filter',
		title: '组件',
		route: '/manage'
	},
	{
		iconType: 'bell',
		title: '知识',
		route: '/handler',
		children: [
			{
				iconType: "bell",
				title: '其他知识',
				route: '/others'
			}
		]
	},
	{
		iconType: 'stop',
		title: 'Vue',
		route: '/accident'
	},
	{
		iconType: 'fork',
		title: '浏览器',
		route: '/check'
	},
	{
		iconType: 'setting',
		title: '算法',
		route: '/setting'
	}
]