/**
 * Source: https://byby.dev/js-slugify-string
 */
export default function slugify(text: String) {
        return text
                .normalize("NFKD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9 -]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-");
}
