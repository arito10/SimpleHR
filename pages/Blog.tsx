import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-6">
             <BookOpen size={12} />
             <span>Knowledge Base</span>
           </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Free HR Resources</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Expert guides, compliance updates, and management strategies provided free for the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <Link key={post.id} to={`/resources/${post.id}`} className="group">
              <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900 uppercase tracking-wide">
                        {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-400 mb-3 space-x-3">
                    <span className="flex items-center"><Calendar size={12} className="mr-1"/> {post.date}</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs font-medium text-primary-600 mt-auto pt-4 border-t border-slate-100">
                    Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;