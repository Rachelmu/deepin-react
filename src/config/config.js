export const MenuConfig = [
	{
		iconType: 'file',
		title: '首页/表单',
		route: '/home'
	},
	{
		iconType: 'filter',
		title: '数据展示',
		route: '/showdata'
	},
	{
		iconType: 'bell',
		title: '上传',
		route: '/upload',
		children: [
			{
				iconType: "bell",
				title: '文件上传',
				route: '/uploadfile'
			},
			{
				iconType: "bell",
				title: '图片上传',
				route: '/uploadpicture'
			}
		]
	},
	{
		iconType: 'crown',
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