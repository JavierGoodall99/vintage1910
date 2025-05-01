import React from 'react';

interface JournalArticleProps {
  date: string;
  title: string;
  author: string;
  institution: string;
  content: string;
  annotation: string;
}

export default function JournalArticle({
  date,
  title,
  author,
  institution,
  content,
  annotation
}: JournalArticleProps) {
  return (
    <article className="journal-article">
      <div className="journal-article-inner">
        <div className="journal-article-metadata">
          <div className="journal-article-date">{date}</div>
        </div>
        
        <h2 className="journal-article-title">{title}</h2>
        
        <div className="journal-article-author">
          <span>{author}</span>
          <span className="journal-article-institution">{institution}</span>
        </div>
        
        <div className="journal-article-content-container">
          <div 
            className="journal-article-annotation-container"
            data-annotation={annotation}
          >
            <div className="journal-article-annotation-marker">†</div>
          </div>
          
          <p className="journal-article-content journal-dropcap">
            {content}
          </p>
        </div>
        
        <div className="journal-article-footer">
          <div className="journal-article-ornament">❧</div>
        </div>
      </div>
    </article>
  );
}