import React, { useState } from 'react';
import { Search, Book, HelpCircle, MessageCircle, Video, Code, Users } from 'lucide-react';
import { generateHelpArticles, generateFAQs, generateSupportResources } from '../../utils/mockHelp';

export const HelpView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('documentation');
  
  const articles = generateHelpArticles();
  const faqs = generateFAQs();
  const resources = generateSupportResources();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'video':
        return Video;
      case 'code':
        return Code;
      case 'users':
        return Users;
      default:
        return HelpCircle;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">How can we help you?</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('documentation')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'documentation'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Book size={16} />
              Documentation
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'faq'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <HelpCircle size={16} />
              FAQs
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'support'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageCircle size={16} />
              Support Resources
            </button>
          </nav>
        </div>

        {activeTab === 'documentation' && (
          <div className="grid gap-6">
            {articles.map((article) => (
              <div key={article.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                  <span className="text-sm text-gray-500">
                    Last updated: {article.lastUpdated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border rounded-lg p-6">
                <span className="text-sm text-blue-600 font-medium">{faq.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = getIconComponent(resource.icon);
              return (
                <div key={resource.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-2"
                  >
                    Access Resource →
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};