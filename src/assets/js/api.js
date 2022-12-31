// import { theme, user, sesh, light_mode } from './stores.js';
import * as utils from './utils';

import { browser } from '$app/env';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// export async function checkSesh() {
// 	let sesh = await getSesh();
// 	if (!utils.isEmptyObj(await getCurrentUser())) {
// 		if (sesh === `null` || Date.now() + 60 >= Number(sesh)) {
// 			await setSesh(Date.now() + 60);
// 			await setCurrentUser(
// 				(
// 					await get({ id: (await getCurrentUser()).id, type: `user` })
// 				).data,
// 				false
// 			);
// 		}
// 	}
// }

// export function getSesh() {
// 	return new Promise((resolve, reject) => {
// 		sesh.subscribe((sesh) => {
// 			if (browser) resolve(sesh);
// 		});
// 	});
// }

// export function setSesh(val) {
// 	sesh.set(val);
// }

// export function getTheme() {
// 	return new Promise((resolve, reject) => {
// 		theme.subscribe((val) => {
// 			if (browser) resolve(val);
// 		});
// 	});
// }

// export function setTheme(val) {
// 	theme.set(val);
// }

// export function getLightMode() {
// 	return new Promise((resolve, reject) => {
// 		light_mode.subscribe((val) => {
// 			if (browser) resolve(val);
// 		});
// 	});
// }

// export function setLightMode(val) {
// 	light_mode.set(val);
// }

// export function getCurrentUser() {
// 	return new Promise((resolve, reject) => {
// 		user.subscribe((val) => {
// 			loadCurrentUser(JSON.parse(val));
// 			if (browser) resolve(JSON.parse(val));
// 		});
// 	});
// }

// let loading_user = false;

// async function loadCurrentUser(user) {
// 	try {
// 		if (!loading_user && !utils.isEmptyObj(user)) {
// 			loading_user = true;

// 			let current_user_data = await get({ id: user.id, type: `user` });

// 			if (current_user_data.res === `ok`) {
// 				let current_user = current_user_data.data;
// 				setCurrentUser(current_user, false);
// 			}

// 			loading_user = false;
// 		}
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

// export function setCurrentUser(new_user, reload) {
// 	user.set(JSON.stringify(new_user));

// 	if (reload) {
// 		location.reload();
// 	}
// }

// export async function logout() {
// 	user.set(null);
// 	location.reload();
// }

// ---- user

// export async function editUser(data) {
// 	let edited_user = await edit({ type: `user`, obj: data });
// 	let current_user = await getCurrentUser();

// 	// if the user is editing their own profile, refresh the user
// 	if (!utils.isEmptyObj(current_user) && current_user.id === current_user.id) {
// 		await utils.wait(0.5);

// 		let user_data = await get({
// 			type: `user`,
// 			id: current_user.id
// 		});

// 		if (!utils.isEmptyObj(user_data) && user_data.res === `ok`) {
// 			setCurrentUser(user_data.data, false);
// 			// user.set(JSON.stringify(await getUser({ id: data.id })));
// 		}
// 	}

// 	return edited_user;
// }

// ---- routes

export async function post(d) {
	return bePost(d);
}

export async function get(d) {
	return bePost({
		...d,
		url: `get`,
		all: true
	});
}

export async function getMany(d) {
	return bePost({
		...d,
		url: `get_many`,
		all: true
	});
}

export async function add(d) {
	return bePost({
		...d,
		url: `add`,
		all: true
	});
}

export async function edit(d) {
	return bePost({
		...d,
		url: `edit`,
		all: true
	});
}

export async function del(d) {
	return bePost({
		...d,
		url: `del`,
		all: true
	});
}

export async function pull(d) {
	return bePost({
		...d,
		url: `pull`,
		all: true
	});
}

// ---- mongo

// function beGet(endpoint) {
// 	return new Promise((resolve, reject) => {
// 		let url = `${API_ENDPOINT}${endpoint}`;

// 		// console.log(url);

// 		$.getJSON(url, function (data) {
// 			resolve(data);
// 		}).fail(() => resolve(null));
// 	});
// }

async function bePost(obj) {
	let config = {
		method: `POST`,
		headers: {
			Accept: `application/json`,
			'Content-Type': `application/json`
		}
	};

	if (!utils.isEmptyObj(obj)) {
		config.body = JSON.stringify(obj);
	}

	try {
		let res = JSON.parse(await (await fetch(`${API_ENDPOINT}${obj.url}`, config)).text());

		try {
			return obj.all ? res : res.data;
		} catch (e) {
			console.log(e);
			return res;
		}
	} catch (e) {
		console.log(`error`);
		console.log(e);
		return null;
	}
}
