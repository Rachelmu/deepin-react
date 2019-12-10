export const MenuConfig = [
	{
		iconType: 'file',
		title: '首页/表单',
		route: '/home/index',
		container: 'Home'
	},
	{
		iconType: 'filter',
		title: '数据展示',
		route: '/home/showdata',
		container: 'Display'
	},
	{
		iconType: 'bell',
		title: '上传',
		route: '/home/upload',
		children: [
			{
				iconType: "bell",
				title: '文件上传',
				route: '/home/upload/uploadfile'
			},
			{
				iconType: "bell",
				title: '图片上传',
				route: '/home/upload/uploadpicture'
			}
		]
	},
	{
		iconType: 'crown',
		title: 'Vue',
		route: '/home/accident'
	},
	{
		iconType: 'fork',
		title: '浏览器',
		route: '/home/check'
	},
	{
		iconType: 'setting',
		title: '算法',
		route: '/home/setting'
	}
]