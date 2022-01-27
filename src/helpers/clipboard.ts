export const copyToClipboard = (text: string): Promise<boolean> =>
	new Promise<boolean>((resolve) =>
		navigator.clipboard
			.writeText(text)
			.then(() => setTimeout(() => resolve(true), 10))
			.catch(() => console.error('Clipboard copy permission denied'))
	);
