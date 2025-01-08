export async function fetchHTML(filename: string): Promise<string> {
    try {
        const response = await fetch(`${filename}.html`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filename}.html`);
        }
        return await response.text();
    } catch (error) {
        console.error(error);
        return '';
    }
}