# ContentBlock Component

## Overview
The `ContentBlock` component is a reusable React component designed to display modular content blocks with dynamic layouts. It supports headings, summaries, paragraphs, bullet points, and action buttons.

## Props
- `heading` (string): The title of the content block.
- `summary` (string): A brief summary or subheading.
- `content` (array of strings): The main content, either paragraphs or bullet points.
- `type` ('paragraph' | 'bullets'): Determines the layout of the content.
- `actions` (array of strings, optional): Labels for action buttons.

## Features
- Responsive design with clean spacing and rounded corners.
- Dynamic rendering of paragraphs or bullet points.
- Optional action buttons with hover states.
- Smooth CSS transitions for hover effects.

## Example Usage
```tsx
<ContentBlock
  heading="Welcome"
  summary="This is a summary."
  content={['Paragraph 1', 'Paragraph 2']}
  type="paragraph"
  actions={['Learn More', 'Get Started']}
/>