import moment from 'moment';
import moment_tz from 'moment-timezone';
// import _ from 'lodash';

// export function formatNumber(num) {
// 	return numeral(num).format('0a');
// }

// https://stackoverflow.com/a/38340730/8919391
export function removeEmptyArrays(obj) {
	return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v.length != 0));
}

export function redirect(url) {
	window.open(url, `_blank`);
}

export function squeezeWebsiteName(url, hasSuffix) {
	url = url.toLowerCase();
	let searchFor = url.includes(`www.`) ? `www.` : url.includes(`https://`) ? `https://` : `http://`;

	let endingIndex = url.indexOf(`.`, url.indexOf(searchFor));
	if (hasSuffix) {
		endingIndex =
			url.indexOf(`/`, url.indexOf(`.`, url.indexOf(searchFor))) !== -1
				? url.indexOf(`/`, url.indexOf(`.`, url.indexOf(searchFor)))
				: url.length;
	}

	return url.substring(url.indexOf(searchFor) + searchFor.length, endingIndex);
}

export function urlifyString(str) {
	return str.replaceAll(`&`, `[ampersand]`).replaceAll(`#`, `[hash]`);
}

export function unurlifyString(str) {
	return str.replaceAll(`[ampersand]`, `&`).replaceAll(`[hash]`, `#`);
}

export function objToUrl(obj) {
	// https://stackoverflow.com/a/38340730/8919391
	// obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v.length > 0));
	if (obj === null || obj === undefined) {
		return ``;
	} else {
		obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined));
		return decodeURIComponent(new URLSearchParams(obj).toString());
	}
}

export function isEmptyObj(obj) {
	for (let i in obj) return false;
	return true;
}

export function isUrl(val) {
	let url;
	try {
		url = new URL(val);
	} catch (e) {
		return false;
	}
	return url.protocol === 'http:' || url.protocol === 'https:';
}

export function wait(seconds) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve();
		}, seconds * 1000);
	});
}

export function generateId() {
	return (Math.random() + 1).toString(36).substring(7);
}

export function getTimestamp() {
	return moment.utc().unix();
}

export function convertToTimestamp(input, format) {
	return moment.utc(input, format).unix();
}

export function formatTimestamp(timestamp, format) {
	return moment.unix(timestamp).utc().format(format);
}

export function formatDatetime(datetime, format, timezone) {
	if (!timezone) {
		timezone = `UTC`;
	}
	return moment_tz.utc(datetime).tz(timezone).format(format);
}

export function getDisplayableTimeElapsed(timestamp) {
	let now = getTimestamp();
	let diff_in_seconds = getTimestampDiff(timestamp, now, `seconds`);
	let diff_in_minutes = getTimestampDiff(timestamp, now, `minutes`);
	let diff_in_hours = getTimestampDiff(timestamp, now, `hours`);
	let diff_in_days = getTimestampDiff(timestamp, now, `days`);

	if (diff_in_seconds < 60) {
		return `${Math.floor(diff_in_seconds)}s`;
	} else if (diff_in_minutes < 60) {
		return `${Math.floor(diff_in_minutes)}m`;
	} else if (diff_in_hours < 24) {
		return `${Math.floor(diff_in_hours)}h`;
	} else {
		return `${Math.floor(diff_in_days)}d`;
	}
}

export function getTimestampDiff(start, end, format) {
	let diff = moment.duration(moment.unix(end).diff(moment.unix(start)));

	switch (format) {
		case `days`:
			return diff.asDays();
		case `hours`:
			return diff.asHours();
		case `minutes`:
			return diff.asMinutes();
		case `seconds`:
		default:
			return diff.asSeconds();
	}
}

export function getDatetimeDiff(start, end, format) {
	let diff = moment.duration(moment(end).diff(moment(start)));

	switch (format) {
		case `days`:
			return diff.asDays();
		case `hours`:
			return diff.asHours();
		case `minutes`:
			return diff.asMinutes();
		case `seconds`:
		default:
			return diff.asSeconds();
	}
}

export function alterTimestamp(operation, offset, type, timestamp) {
	switch (operation) {
		case 'add':
			return moment
				.utc(timestamp, `X`)
				.add(offset || 0, type || `seconds`)
				.unix();
		case 'subtract':
			return moment
				.utc(timestamp, `X`)
				.subtract(offset || 0, type || `seconds`)
				.unix();
		default:
			return timestamp;
	}
}

export function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isToggled(dom_item) {
	return [...dom_item.classList].includes(`toggled--`);
}

export async function toggle(dom_item) {
	if (dom_item) {
		if (![...dom_item.classList].includes(`toggled--`)) {
			// console.log(`toggling on`);
			dom_item.classList.add(`toggled--`);
			await wait(0.05);
			dom_item.classList.add(`visible--`);
		} else {
			// console.log(`toggling off`);
			dom_item.classList.remove(`visible--`);
			await wait(0.2);
			dom_item.classList.remove(`toggled--`);
		}
		return dom_item;
	}
}

// https://stackoverflow.com/a/20285053/8919391
export async function blobToDataUrl(val, type) {
	let blob = type === `url` ? await (await fetch(val)).blob() : val;
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}

export function isValidUrl(str) {
	try {
		new URL(str);
		return true;
	} catch (e) {
		return false;
	}
}

export function scrollHorz(e, target) {
	target.scrollLeft += e.deltaY * 6;
}

export function shuffleArray(arr) {
	// https://stackoverflow.com/a/46545530/8919391
	return arr
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
}

export function hasErrors(arr) {
	if (
		Object.keys(arr)
			.map((key) => arr[key])
			.join(``)
			.trim().length === 0
	) {
		return false;
	} else {
		return true;
	}
}

export function resetErrors(arr) {
	for (let key of Object.keys(arr)) {
		arr[key] = ``;
	}

	return arr;
}

export function calcPercChange(a, b) {
	if (a === null || b === null) {
		return 0;
	}

	let percent;
	if (b !== 0) {
		if (a !== 0) {
			percent = ((b - a) / a) * 100;
		} else {
			percent = b * 100;
		}
	} else {
		percent = -a * 100;
	}
	return percent;
}

export function round(num, precision) {
	if (num) {
		if (num >= 0) {
			return parseFloat(Math.abs(parseFloat(num.toString().split('e')[0])).toFixed(precision));
		} else {
			return parseFloat(Math.abs(parseFloat(num.toString().split('e')[0])).toFixed(precision)) * -1;
		}
	} else {
		return 0;
	}
}

export function shortenString(data) {
	if (!data.left && !data.right) {
		data.right = true;
	}

	if (data.string && data.string.length > data.length) {
		if (data.left) {
			return `...${data.string
				.substring(data.string.length - data.length, data.string.length)
				.trim()}`;
		} else if (data.right) {
			return `${data.string.substring(0, data.length).trim()}...`;
		}
	} else {
		return data.string;
	}
}

export function formatAddress(address) {
	return !isEmptyObj(address)
		? `${address.substring(0, 4)}...${address.substring(address.length - 4, address.length)}`
		: ``;
}

export function isBetween(x, min, max) {
	return x >= min && x <= max;
}

export function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

// export function clone(obj) {
// 	return Object.assign({}, obj);
// }

export function getTimezones() {
	let timezones = moment_tz.tz.names().map((t) => {
		let zone = moment_tz.tz(t).format(`z`);

		return {
			name: t,
			zone: `${zone.startsWith(`+`) || zone.startsWith(`-`) ? `UTC` : ``}${zone
				.replace(`+0`, `+`)
				.replace(`-0`, `-`)}`
		};
	});

	timezones = JSON.parse(JSON.stringify(timezones))
		.filter((t) => t.name.startsWith(`Etc/`))
		.concat(JSON.parse(JSON.stringify(timezones)).filter((t) => !t.name.startsWith(`Etc/`)));

	return timezones;
}

export function getTimezoneZone(id) {
	let zone = moment_tz.tz(id).format(`z`);

	return `${zone.startsWith(`+`) || zone.startsWith(`-`) ? `UTC` : ``}${zone
		.replace(`+0`, `+`)
		.replace(`-0`, `-`)}`;
}

// export function getDatetimeInTimezone(datetime, timezone) {
// 	return moment_tz.utc(datetime).tz(timezone).format();
// }

// export function getTimezoneInDatetime(datetime, timezone) {
// 	return moment_tz.tz(datetime, timezone).toISOString();
// }

export function scrollToItemInContainer(data) {
	data.container_div.scrollBy({
		top: data.item_div.offsetTop - data.container_div.scrollTop,
		left: 0,
		behavior: 'smooth'
	});
}

export function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}

export function getCompressedImage(d) {
	return d.url;
	// return `https://img-cdn.magiceden.dev/rs:fill:${d.w}:${d.h}:0:0/plain/${d.url}`;
	// return `https://api.phantom.app/image-proxy/?image=${d.url}&fit=cover&width=${d.w}&height=${d.h}`;
}
