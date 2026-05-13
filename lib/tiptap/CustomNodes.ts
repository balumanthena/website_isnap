import { Node, mergeAttributes } from '@tiptap/core'

export const Callout = Node.create({
  name: 'callout',
  group: 'block',
  content: 'inline*',
  addAttributes() {
    return {
      type: { default: 'info' },
    }
  },
  parseHTML() { return [{ tag: 'div[data-type="callout"]' }] },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'callout', class: 'callout' }), 0]
  },
})

export const CTA = Node.create({
  name: 'cta',
  group: 'block',
  content: 'inline*',
  addAttributes() {
    return { url: { default: '' } }
  },
  parseHTML() { return [{ tag: 'div[data-type="cta"]' }] },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'cta', class: 'cta-block' }), 0]
  },
})

export const FAQ = Node.create({
  name: 'faq',
  group: 'block',
  content: 'inline*',
  parseHTML() { return [{ tag: 'div[data-type="faq"]' }] },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'faq', class: 'faq-block' }), 0]
  },
})

export const Stats = Node.create({
  name: 'stats',
  group: 'block',
  content: 'inline*',
  parseHTML() { return [{ tag: 'div[data-type="stats"]' }] },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'stats', class: 'stats-grid' }), 0]
  },
})

export const Timeline = Node.create({
  name: 'timeline',
  group: 'block',
  content: 'inline*',
  parseHTML() { return [{ tag: 'div[data-type="timeline"]' }] },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'timeline', class: 'timeline-block' }), 0]
  },
})
