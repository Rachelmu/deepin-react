export const MenuConfig = [
	{
		iconType: 'file',
		title: '首页/表单',
		route: '/home/index',
		container: 'Home'
	},
	{
		iconType: 'filter',
		title: '生命周期',
		route: '/home/lifecircle',
		container: 'LifeCircle'
	},
	{
		iconType: 'bell',
		title: '上传',
		route: '/home/upload',
		children: [
			{
				iconType: "bell",
				title: '文件上传',
				route: '/home/upload/uploadfile',
				container: 'UploadFile'
			},
			{
				iconType: "bell",
				title: '图片上传',
				route: '/home/upload/uploadpicture',
				container: 'UploadFile'
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