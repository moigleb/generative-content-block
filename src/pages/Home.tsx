import React from 'react';
import ContentBlock from '../components/ContentBlock';

const Home: React.FC = () => {
  const sampleContent: Array<{
    heading: string;
    summary: string;
    content: string[];
    type: 'paragraph' | 'bullets';
    actions?: string[];
  }> = [
    {
      heading: 'Welcome to the Platform',
      summary: 'This is a summary of the content block.',
      content: ['This is a paragraph of text.', 'Here is another paragraph.'],
      type: 'paragraph',
      actions: ['Learn More', 'Get Started'],
    },
    {
      heading: 'Features Overview',
      summary: 'Here are some key features:',
      content: ['Feature 1', 'Feature 2', 'Feature 3'],
      type: 'bullets',
      actions: ['Explore Features'],
    },
  ];

  return (
    <div className='space-y-6'>
      {sampleContent.map((block, index) => (
        <ContentBlock
          key={index}
          heading={block.heading}
          summary={block.summary}
          content={block.content}
          type={block.type}
          actions={block.actions}
        />
      ))}
    </div>
  );
};

export default Home;
