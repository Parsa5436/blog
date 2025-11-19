import { ArticleCardProps } from "@/types";
import { getValidImageSrc, formatDate, truncateText, cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ArticleProps extends ArticleCardProps {
  className?: string;
  showFullContent?: boolean;
}

function Article({ 
  title, 
  thumbnail, 
  content, 
  author, 
  date, 
  className,
  showFullContent = false 
}: ArticleProps) {
  const displayContent = showFullContent ? content : truncateText(content, 150);
  
  return (
    <article className={cn(
      "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
      className
    )}>
      <div className="relative h-48 w-full">
        <Image
          src={getValidImageSrc(thumbnail)}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
          {title}
        </h2>
        
        <p className="text-gray-700 mb-4 leading-relaxed">
          {displayContent}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">By {author}</span>
          <time dateTime={date} className="text-gray-400">
            {formatDate(date)}
          </time>
        </div>
      </div>
    </article>
  );
}

export default Article;
