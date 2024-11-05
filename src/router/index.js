import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'portfolio',
		component: function () {
			return import('../views/portfolio/Portfolio.vue');
		}
	},
    /*
	{
		path: '/share',
		name: 'share',
		component: function () {
			return import('../views/share/Share.vue')
		}
	},
	{
		path: '/policy',
		name: 'policy',
		component: function() {
			return import('../views/Policy.vue')
		}
	},
    */
   /*
	{
		path: '/demo-luksus',
		name: 'demo-luksus',
		component: () => {
			return import('../views/DemoLuksus.vue');
		}
	}
        */
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router;
