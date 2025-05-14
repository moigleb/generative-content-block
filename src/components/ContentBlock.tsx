import React, { useState } from 'react';

interface ContentBlockProps {
  heading: string;
  summary: string;
  content: string[];
  type: 'paragraph' | 'bullets';
  actions?: string[];
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  heading,
  summary,
  content,
  type,
  actions,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const regenerateContent = () => {
    const shuffledContent = [...currentContent].sort(() => Math.random() - 0.5);
    setCurrentContent(shuffledContent);
    alert('Content regenerated!');
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-300 ${
        isHovered ? 'shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
          {heading}
        </h2>
        <div className='relative'>
          <button
            className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ⋮
          </button>
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10'>
              <ul className='py-1'>
                <li className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'>
                  Edit
                </li>
                <li className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'>
                  Duplicate
                </li>
                <li className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'>
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <p className='text-gray-700 dark:text-gray-400 mb-4 text-left'>
        {summary}
      </p>

      <div className='mb-4'>
        {type === 'paragraph' ? (
          currentContent.map((paragraph, index) => (
            <p
              key={index}
              className='text-gray-800 dark:text-gray-300 mb-2 text-left'
            >
              {paragraph}
            </p>
          ))
        ) : (
          <ul className='list-disc list-inside text-gray-800 dark:text-gray-300 text-left'>
            {currentContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {actions && (
        <div className='flex gap-2'>
          {actions.map((action, index) => (
            <button
              key={index}
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
            >
              {action}
            </button>
          ))}
          <button
            onClick={regenerateContent}
            className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition'
          >
            Regenerate
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
