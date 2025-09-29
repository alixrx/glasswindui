import React from 'react';
import { createRootRoute, createRoute, createRouter, Outlet, Link } from '@tanstack/react-router';
import RootLayout from '@/pages/_layout/RootLayout';
import Home from '@/pages/Home';
import Introduction from '@/pages/Introduction';
import ButtonPage from '@/pages/ButtonPage';
import IconButtonPage from '@/pages/IconButtonPage';
import CardsPage from '@/pages/CardsPage';
import SwitchPage from '@/pages/SwitchPage';
import CheckboxPage from '@/pages/CheckboxPage';
import BadgePage from '@/pages/BadgePage';
import AccordionPage from '@/pages/AccordionPage';

const rootRoute = createRootRoute({
	component: () => (
		<RootLayout>
			<Outlet />
		</RootLayout>
	),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Introduction,
});

const installRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/installation',
    component: Home,
});

const buttonRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/button',
	component: ButtonPage,
});

const iconButtonRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/icon-button',
	component: IconButtonPage,
});

const cardsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/cards',
    component: CardsPage,
});

const switchRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/switch',
    component: SwitchPage,
});

const checkboxRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/checkbox',
    component: CheckboxPage,
});

const badgeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/badge',
    component: BadgePage,
});

const collapseRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/accordion',
    component: AccordionPage,
});

const routeTree = rootRoute.addChildren([indexRoute, installRoute, buttonRoute, iconButtonRoute, cardsRoute, switchRoute, checkboxRoute, badgeRoute, collapseRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}


