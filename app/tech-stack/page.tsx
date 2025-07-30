
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const technologies = {
    'Frontend': [
      {
        name: 'Next.js 14',
        description: 'React framework hiện đại với tính năng Server-Side Rendering, Static Site Generation và App Router mới nhất.',
        icon: 'ri-reactjs-line',
        color: 'from-sky-300 to-cyan-300',
        features: ['App Router', 'Server Components', 'Static Generation', 'TypeScript Support'],
        usage: 'Framework chính để xây dựng ứng dụng React với hiệu suất cao'
      },
      {
        name: 'React 18',
        description: 'Thư viện JavaScript để xây dựng giao diện người dùng tương tác với các tính năng mới nhất.',
        icon: 'ri-reactjs-line',
        color: 'from-cyan-300 to-teal-300',
        features: ['Hooks', 'Concurrent Features', 'Suspense', 'Component-based'],
        usage: 'Xây dựng components tương tác và quản lý state'
      },
      {
        name: 'TypeScript',
        description: 'Ngôn ngữ lập trình mở rộng từ JavaScript với static type checking.',
        icon: 'ri-code-s-slash-line',
        color: 'from-teal-300 to-sky-300',
        features: ['Type Safety', 'IntelliSense', 'Refactoring', 'Error Prevention'],
        usage: 'Đảm bảo type safety và cải thiện developer experience'
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework giúp styling nhanh chóng và nhất quán.',
        icon: 'ri-palette-line',
        color: 'from-sky-300 to-cyan-300',
        features: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'JIT Compilation'],
        usage: 'Styling toàn bộ giao diện với approach utility-first'
      }
    ],
    'Styling & UI': [
      {
        name: 'Glassmorphism',
        description: 'Hiệu ứng thiết kế hiện đại với backdrop-blur và transparency.',
        icon: 'ri-drop-line',
        color: 'from-cyan-300 to-sky-300',
        features: ['Backdrop Blur', 'Transparency', 'Layering', 'Modern Look'],
        usage: 'Tạo hiệu ứng kính mờ cho cards và overlays'
      },
      {
        name: 'Gradient Design',
        description: 'Sử dụng gradient colors để tạo visual appeal và depth.',
        icon: 'ri-brush-line',
        color: 'from-teal-300 to-cyan-300',
        features: ['Color Transitions', 'Visual Depth', 'Brand Consistency', 'Modern Aesthetic'],
        usage: 'Áp dụng trong backgrounds, buttons và accent elements'
      },
      {
        name: 'Responsive Design',
        description: 'Thiết kế responsive cho mọi thiết bị từ mobile đến desktop.',
        icon: 'ri-layout-line',
        color: 'from-sky-300 to-teal-300',
        features: ['Mobile First', 'Breakpoints', 'Flexible Layouts', 'Touch Friendly'],
        usage: 'Đảm bảo trải nghiệm tốt trên mọi kích thước màn hình'
      }
    ],
    'Animation & Interaction': [
      {
        name: 'CSS Animations',
        description: 'Animations và transitions mượt mà được tạo bằng CSS thuần.',
        icon: 'ri-magic-line',
        color: 'from-cyan-300 to-teal-300',
        features: ['Smooth Transitions', 'Hover Effects', 'Keyframe Animations', 'Transform'],
        usage: 'Tạo hiệu ứng hover, loading và micro-interactions'
      },
      {
        name: 'Framer Motion Ready',
        description: 'Chuẩn bị sẵn sàng tích hợp thư viện animation nâng cao.',
        icon: 'ri-movie-line',
        color: 'from-sky-300 to-cyan-300',
        features: ['Complex Animations', 'Gesture Support', 'Layout Animations', 'Variants'],
        usage: 'Có thể mở rộng với animations phức tạp khi cần'
      }
    ],
    'Development Tools': [
      {
        name: 'ESLint',
        description: 'Tool kiểm tra chất lượng code và enforce coding standards.',
        icon: 'ri-bug-line',
        color: 'from-teal-300 to-sky-300',
        features: ['Code Quality', 'Best Practices', 'Error Detection', 'Consistency'],
        usage: 'Đảm bảo code quality và consistency'
      },
      {
        name: 'Prettier',
        description: 'Code formatter tự động format code theo chuẩn đã định.',
        icon: 'ri-code-line',
        color: 'from-sky-300 to-cyan-300',
        features: ['Auto Formatting', 'Consistent Style', 'Integration', 'Customizable'],
        usage: 'Tự động format code để đảm bảo consistency'
      },
      {
        name: 'Git',
        description: 'Version control system để quản lý source code.',
        icon: 'ri-git-branch-line',
        color: 'from-cyan-300 to-teal-300',
        features: ['Version Control', 'Branching', 'Collaboration', 'History'],
        usage: 'Quản lý versions và collaborate trong team'
      }
    ],
    'Performance & SEO': [
      {
        name: 'Image Optimization',
        description: 'Tối ưu hóa hình ảnh với Next.js Image component và external APIs.',
        icon: 'ri-image-line',
        color: 'from-sky-300 to-teal-300',
        features: ['Lazy Loading', 'WebP Support', 'Responsive Images', 'Performance'],
        usage: 'Tối ưu loading và hiển thị hình ảnh'
      },
      {
        name: 'Code Splitting',
        description: 'Chia nhỏ code thành các chunks để tối ưu loading time.',
        icon: 'ri-scissors-line',
        color: 'from-cyan-300 to-sky-300',
        features: ['Dynamic Imports', 'Bundle Optimization', 'Lazy Loading', 'Performance'],
        usage: 'Giảm bundle size và cải thiện performance'
      },
      {
        name: 'SEO Optimization',
        description: 'Tối ưu SEO với metadata, structured data và semantic HTML.',
        icon: 'ri-search-line',
        color: 'from-teal-300 to-cyan-300',
        features: ['Meta Tags', 'Structured Data', 'Semantic HTML', 'Performance'],
        usage: 'Cải thiện ranking và visibility trên search engines'
      }
    ]
  };

  const categories = Object.keys(technologies);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/40 via-cyan-50/20 to-sky-50/40">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Công Nghệ Sử Dụng 
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Khám phá stack công nghệ hiện đại được sử dụng để xây dựng portfolio website này, 
              từ frontend frameworks đến styling solutions và development tools.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-sky-300 to-cyan-300 text-white shadow-lg scale-105'
                    : 'bg-white/60 text-gray-600 hover:bg-white/80 hover:text-sky-500 border border-sky-200/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technology Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {technologies[activeCategory].map((tech, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <i className={`${tech.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="ri-star-line text-sky-500 mr-2"></i>
                    Tính năng chính:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-sky-100/80 text-sky-600 rounded-full border border-sky-200/50 hover:scale-105 transition-transform duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-sky-50/80 to-cyan-50/60 rounded-2xl p-4 border border-sky-100/50">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="ri-lightbulb-line text-cyan-500 mr-2"></i>
                    Cách sử dụng:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {tech.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Overview */}
          <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Kiến Trúc Hệ Thống 🏗️
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className="ri-layout-3-line text-white text-2xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                  Component-Based Architecture
                </h3>
                <p className="text-gray-600 text-sm">
                  Chia nhỏ UI thành các components tái sử dụng, dễ maintain và scale
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className="ri-speed-line text-white text-2xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  Performance Optimized
                </h3>
                <p className="text-gray-600 text-sm">
                  Lazy loading, code splitting và image optimization cho tốc độ tải nhanh
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-300 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className="ri-responsive-line text-white text-2xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  Responsive Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Hoạt động mượt mà trên mọi thiết bị từ mobile đến desktop
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link href="/" className="inline-block bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer whitespace-nowrap">
              <i className="ri-arrow-left-line mr-2"></i>
              Quay về Trang Chủ
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
