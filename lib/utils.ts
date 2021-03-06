import { Readable } from 'stream';

import Vinyl = require('vinyl');

import { getBrandsIcons, getRegularIcons, getSolidIcons } from './icons';

import { IconInfo } from './types';
export { IconInfo };

export interface IconsSource {
	solid: IconInfo[];
	regular: IconInfo[];
	brands: IconInfo[];
}

export function getSource(): IconsSource {
	let iconsSource: IconsSource = {
		solid: getSolidIcons(),
		regular: getRegularIcons(),
		brands: getBrandsIcons()
	};

	return iconsSource;
}

/**
 * Create fake source stream.
 *
 * @export
 * @param {string} filename File name.
 * @param {string} content Content.
 * @returns Source stream.
 */
export function createStream(filename: string, content: string) {
	let src = new Readable({
		objectMode: true,
		read() {
			this.push(new Vinyl({
				path: filename,
				contents: Buffer.from(content)
			}));
			this.push(null);
		}
	});
	return src;
}
