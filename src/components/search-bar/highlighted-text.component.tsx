import React from 'react';

interface Chunk {
  text: string;
  highlighted: boolean;
}

const truncate = (chunks: Chunk[], maxLength: number): Chunk[] => {
  if (!maxLength || !chunks || !chunks.length) {
    return chunks;
  }

  const results: Chunk[] = [];
  let totalLength = 0;
  let text = '';
  let index = 0;

  // special case the first bit to truncate the front half of non-highlighted
  // text before the first highlighted piece but leave a little context
  if (
    !chunks[index].highlighted &&
    chunks[index].text.length >= maxLength / 4
  ) {
    text = chunks[index].text.substring(chunks[index].text.length - 20);
    results.push({
      text: `...${text}`,
      highlighted: chunks[index].highlighted,
    });
    totalLength += text.length;
    index += 1;

    if (chunks.length > 1) {
      text = chunks[index].text.substring(0, maxLength - totalLength);
      results.push({ text, highlighted: chunks[index].highlighted });
      totalLength += text.length;
      index += 1;
    }
  }

  // Add in any following bits and other matches if they fit
  for (; index < chunks.length && totalLength < maxLength; index += 1) {
    text =
      chunks[index].text.length + totalLength < maxLength
        ? chunks[index].text
        : chunks[index].text.substring(0, maxLength - totalLength);
    totalLength += text.length;
    if (text !== chunks[index].text) {
      text += '...';
    }
    results.push({ text, highlighted: chunks[index].highlighted });
  }
  return results;
};

const highlight = (
  content: string,
  positions: number[][],
  maxLength: number
): Chunk[] => {
  const chunks: Chunk[] = [];
  let lastIndex = 0;
  const sortedPositions = positions.slice(); // clone
  sortedPositions.sort((a, b) => a[0] - b[0]); // asscending by start index
  sortedPositions.forEach(([start, length]) => {
    const text = content.substring(lastIndex, start);
    if (text) {
      chunks.push({ text, highlighted: false });
    }
    chunks.push({
      text: content.substring(start, start + length),
      highlighted: true,
    });
    lastIndex = start + length;
  });
  if (lastIndex < content.length) {
    chunks.push({ text: content.substring(lastIndex), highlighted: false });
  }
  return truncate(chunks, maxLength);
};

interface HighlightedTextProps {
  positions: number[][];
  content: string;
  isMarkdown?: boolean;
  maxLength: number;
  style?: any;
  className?: any;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  positions,
  content,
  isMarkdown,
  maxLength,
  ...rest
}) => {
  const chunks = highlight(content, positions, maxLength);

  return (
    <p {...rest}>
      {chunks.map(({ text, highlighted }, index) => {
        if (highlighted) {
          return (
            <span key={index} style={{ backgroundColor: '#FFFF00' }}>
              {text}
            </span>
          );
        }
        return <span key={index}>{text}</span>;
      })}
    </p>
  );
};

export default HighlightedText;
