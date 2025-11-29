import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Button from '../components/Button';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 py-12">
         <div className="max-w-3xl mx-auto px-4">
            <Link to="/blog" className="text-slate-500 hover:text-slate-900 flex items-center mb-6 text-sm">
              <ArrowLeft size={16} className="mr-1" /> Back to Blog
            </Link>
            <div className="text-primary-600 font-bold uppercase tracking-wide text-xs mb-2">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-slate-500 text-sm gap-6">
               <div className="flex items-center">
                 <User size={16} className="mr-2" /> {post.author}
               </div>
               <div className="flex items-center">
                 <Calendar size={16} className="mr-2" /> {post.date}
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-2xl mb-10 shadow-lg" />
        
        <div className="prose prose-lg prose-slate max-w-none mb-12">
           {/* In a real app, this would be dangerouslySetInnerHTML or a markdown renderer */}
           <p className="lead text-xl text-slate-700 mb-6 font-medium">{post.excerpt}</p>
           <p>{post.content}</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <h3>Why this matters</h3>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>

        <div className="border-t border-slate-200 pt-8 flex justify-between items-center">
          <div className="font-bold text-slate-900">Share this article:</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Share2 size={16} className="mr-2"/> Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;