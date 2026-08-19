import MarkdownIt from "markdown-it"

// Source-relative links in the docs map onto the pages we publish them at.
const docRoutes: Record<string, string> = {
	"PrivacyPolicy.md": "/privacy/",
	"TermsOfService.md": "/terms/",
	"AccountAndDataDeletion.md": "/account-deletion/",
}

// GitHub-style heading slugs, so the docs' own in-page links keep working.
function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\p{L}\p{N} -]/gu, "")
		.trim()
		.replace(/\s+/g, "-")
}

const md = new MarkdownIt({ html: true, linkify: true })

md.renderer.rules.heading_open = (tokens, idx, options, _env, self) => {
	const inline = tokens[idx + 1]
	if (inline && inline.type === "inline") {
		tokens[idx].attrSet("id", slugify(inline.content))
	}
	return self.renderToken(tokens, idx, options)
}

md.renderer.rules.link_open = (tokens, idx, options, _env, self) => {
	const href = String(tokens[idx].attrGet("href") ?? "")
	if (href) {
		if (docRoutes[href]) {
			tokens[idx].attrSet("href", docRoutes[href])
		} else if (/^https?:\/\//.test(href)) {
			tokens[idx].attrSet("target", "_blank")
			tokens[idx].attrSet("rel", "noopener noreferrer")
		}
	}
	return self.renderToken(tokens, idx, options)
}

// Wide tables scroll inside their own container instead of the page.
md.renderer.rules.table_open = () => '<div class="doc-table-wrap">\n<table>\n'
md.renderer.rules.table_close = () => "</table>\n</div>\n"

export function renderMarkdown(source: string): string {
	return md.render(source)
}
