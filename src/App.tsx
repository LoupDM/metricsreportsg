import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, TrendingUp, Users, Mail, Target, Clock, Eye, MousePointer, UserX, ChevronDown } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'results', label: 'Results' },
    { id: 'performance-factors', label: 'Performance Factors' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'next-steps', label: 'Next Steps' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToNext = (nextSectionId) => {
    scrollToSection(nextSectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hamburger Menu */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-40 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 pt-20">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Navigation</h3>
          <nav className="space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-orange-100 text-orange-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-green-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow">
            2024-2025 Saf-gard Email Metrics Analysis
          </h1>
        </div>
      </header>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Overview</h2>
            
            {/* Data Used Section */}
            <div className="bg-orange-50 rounded-xl p-8 mb-12 max-w-4xl mx-auto border border-orange-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Used</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                ~140 individual emails from Jan 2024 to July 2025 were gathered and used as the sample size for the analysis. 
                These included Promotional Emails, Subsidy, and Catalogs for both standalone campaigns and recurring drips.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Key Metrics Analyzed</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-4 h-4" />, title: "Open Rate", color: "bg-orange-500" },
              { icon: <MousePointer className="w-4 h-4" />, title: "Click-Through Rate (CTR)", color: "bg-orange-500" },
              { icon: <Mail className="w-4 h-4" />, title: "Delivery Rate", color: "bg-orange-500" },
              { icon: <UserX className="w-4 h-4" />, title: "Opt-Out Rate", color: "bg-orange-500" },
              { icon: <Target className="w-4 h-4" />, title: "Targeting", color: "bg-orange-500" },
              { icon: <Users className="w-4 h-4" />, title: "List Size", color: "bg-orange-500" },
              { icon: <Clock className="w-4 h-4" />, title: "Send Time/Date", color: "bg-orange-500" },
              { icon: <BarChart3 className="w-4 h-4" />, title: "Segmentation", color: "bg-orange-500" },
              { icon: <Mail className="w-4 h-4" />, title: "Subject Line", color: "bg-orange-500" },
              { icon: <Eye className="w-4 h-4" />, title: "Preheader", color: "bg-orange-500" },
              { icon: <Users className="w-4 h-4" />, title: "From Name", color: "bg-orange-500" },
              { icon: <TrendingUp className="w-4 h-4" />, title: "Primary Headline", color: "bg-orange-500" },
              { icon: <Mail className="w-4 h-4" />, title: "Copy Content", color: "bg-orange-500" },
              { icon: <Target className="w-4 h-4" />, title: "Value Proposition", color: "bg-orange-500" },
              { icon: <MousePointer className="w-4 h-4" />, title: "Call-to-Action (CTA)", color: "bg-orange-500" },
              { icon: <Clock className="w-4 h-4" />, title: "Urgency Elements", color: "bg-orange-500" },
              { icon: <Users className="w-4 h-4" />, title: "Convenience Options", color: "bg-orange-500" }
            ].map((metric, index) => (
              <div key={index} className="metric-card bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`${metric.color} w-8 h-8 rounded-lg flex items-center justify-center text-white mb-2 mx-auto`}>
                  {metric.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 text-center">{metric.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="metric-hover bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">96.77%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Delivery Rate</div>
              <div className="text-sm text-gray-600">Excellent inbox placement</div>
            </div>
            <div className="metric-hover bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">26.17%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Open Rate</div>
              <div className="text-sm text-gray-600">Strong engagement</div>
            </div>
            <div className="metric-hover bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">5.96%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Click-Through Rate</div>
              <div className="text-sm text-gray-600">Solid performance</div>
            </div>
            <div className="metric-hover bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Click-to-Open Rate</div>
              <div className="text-sm text-gray-600">Good engagement</div>
            </div>
            <div className="metric-hover bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.72%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Opt-Out Rate</div>
              <div className="text-sm text-gray-600">Needs improvement</div>
            </div>
            <div className="metric-hover bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">0.032%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Spam Complaint Rate</div>
              <div className="text-sm text-gray-600">Excellent performance</div>
            </div>
          </div>

          {/* Industry Benchmarks Subsection */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Industry Benchmarks</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-800">Metric</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-800">SafGard</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-800">Industry Average</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-800">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Delivery Rate", safgard: "96.77%", industry: "90.0% - 96.5%", performance: "Above Average", color: "text-green-600" },
                    { metric: "Open Rate", safgard: "26.17%", industry: "18.0% - 21.0%", performance: "Excellent", color: "text-green-600" },
                    { metric: "Click-Through Rate", safgard: "5.96%", industry: "1.0% - 3.0%", performance: "Excellent", color: "text-green-600" },
                    { metric: "Click-to-Open Rate", safgard: "25%", industry: "8.0% - 11.0%", performance: "Excellent", color: "text-green-600" },
                    { metric: "Opt-Out Rate", safgard: "4.72%", industry: "0.1% - 0.3%", performance: "Needs Improvement", color: "text-red-600" },
                    { metric: "Spam Complaint Rate", safgard: "0.032%", industry: "0.05% - 0.08%", performance: "Excellent", color: "text-green-600" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-4 px-6 font-medium text-gray-800">{row.metric}</td>
                      <td className="py-4 px-6 text-center font-semibold text-orange-600">{row.safgard}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row.industry}</td>
                      <td className={`py-4 px-6 text-center font-semibold ${row.color}`}>{row.performance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Spread Subsection */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Performance Spread</h3>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
              We see that the overall positive metrics are the result of a smaller set of emails that perform extremely well and many emails which perform adequately or below.
            </p>
            
            {/* Custom Chart */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end justify-center space-x-8 mb-8" style={{ height: '400px' }}>
                {/* Excellent Bar */}
                <div className="flex flex-col items-center">
                  <div 
                    className="bg-green-500 rounded-t-lg transition-all duration-1000 hover:bg-green-600 relative group cursor-pointer"
                    style={{ width: '120px', height: '144px' }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      36 campaigns (25.7%)
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-2xl text-green-600">36</div>
                    <div className="text-sm font-medium text-gray-700">Excellent</div>
                  </div>
                </div>

                {/* Average Bar */}
                <div className="flex flex-col items-center">
                  <div 
                    className="bg-orange-500 rounded-t-lg transition-all duration-1000 hover:bg-orange-600 relative group cursor-pointer"
                    style={{ width: '120px', height: '194px' }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      54 campaigns (38.6%)
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-2xl text-orange-600">54</div>
                    <div className="text-sm font-medium text-gray-700">Average</div>
                  </div>
                </div>

                {/* Poor Bar */}
                <div className="flex flex-col items-center">
                  <div 
                    className="bg-red-500 rounded-t-lg transition-all duration-1000 hover:bg-red-600 relative group cursor-pointer"
                    style={{ width: '120px', height: '180px' }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      50 campaigns (35.7%)
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-2xl text-red-600">50</div>
                    <div className="text-sm font-medium text-gray-700">Poor</div>
                  </div>
                </div>
              </div>

              {/* Y-axis labels */}
              <div className="flex justify-center mb-6">
                <div className="text-sm text-gray-600 font-medium">Number of Campaigns (Total: 140)</div>
              </div>
            </div>

            {/* Performance Criteria */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                  <div className="font-semibold text-gray-900 mb-1">Excellent</div>
                </div>
                <div className="text-sm text-gray-600">Open Rate &gt; 23.49% AND CTR &gt; 3.39%</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-orange-500 rounded mr-3"></div>
                  <div className="font-semibold text-gray-900 mb-1">Average</div>
                </div>
                <div className="text-sm text-gray-600">Mid-range performance across metrics</div>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                  <div className="font-semibold text-gray-900 mb-1">Poor</div>
                </div>
                <div className="text-sm text-gray-600">Open Rate &lt; 10.73% AND CTR &lt; 0.34%</div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-orange-100 rounded-xl p-6 mt-8 border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Key Insight</h4>
              </div>
              <p className="text-gray-700">
                By studying the different performance types and measuring them against the data points, we can get a picture of what factors affect which metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Factor Analysis */}
      <section id="performance-factors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Performance Factor Analysis</h2>
          </div>

          {/* Delivery Rate */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Rate (96.77%)</h3>
            <p className="text-lg text-gray-600 mb-6">The percentage of emails that successfully reach recipients' inboxes.</p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What Affects It:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>List Quality:</strong> Valid email addresses without typos.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Spam Trigger Words:</strong> Using words like "FREE!", "URGENT!", and excessive caps can trigger spam filters.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Image-to-Text Ratio:</strong> Too many images can trigger spam filters.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Findings</h4>
              </div>
              <p className="text-gray-700">Delivery rate is excellent and needs no major changes</p>
            </div>
          </div>

          {/* Open Rate */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Open Rate (26.17%)</h3>
            <p className="text-lg text-gray-600 mb-6">The percentage of delivered emails that recipients open.</p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What Affects It:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Subject Line:</strong> The number one factor affecting OR. SLs that follow key points usually outperform those that don't.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Preheader:</strong> Secondary factor, much less important than SL. Should be used to compliment SL and continue to drive the point further.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Sender Name:</strong> Limited data, majority are division names with very few distinct examples.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Send Time:</strong> 7-9 AM, Tuesday - Thursday</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 mb-8 border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Findings</h4>
              </div>
              <p className="text-gray-700 mb-3">
                SG users respond best to clear, specific benefits or announcements that relate to their needs. They are also more likely to open emails with personalized content from sources they recognize.
              </p>
              <p className="text-gray-700">
                <strong>Suggestion:</strong> Test afternoon or evening send times to catch workers after their shifts/when relaxing doing clerical work to wrap up the day.
              </p>
            </div>

            {/* Subject Line Building Guidelines */}
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Subject Line Building Guidelines</h4>
              <div className="bg-white rounded-lg p-6 mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Includes at least 1 of the following. Sweet spot is using 2 at a time.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>User specific language</strong> (Location, Industry, Role, Name, Company Name)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Direct user benefit</strong> (dollar amount, feature, problem solution, convenience)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Focused branding</strong> (Brand name + direct benefit relationship)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Urgency/Relevance</strong> (Limited time, curiosity builder, user relevance to message - why should they care?)</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-800 mb-4">Good Examples</h5>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <p className="font-medium text-gray-800">BRUNT. Our newest brand partner has arrived.</p>
                      <p className="text-sm text-orange-600">(23% OR)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <p className="font-medium text-gray-800">Savannah: There's a new way to get your safety shoes.</p>
                      <p className="text-sm text-orange-600">(36% OR)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-800 mb-4">Less Good Examples</h5>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                      <p className="font-medium text-gray-800">Timberland PRO® just got even better.</p>
                      <p className="text-sm text-gray-600">(17% OR)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                      <p className="font-medium text-gray-800">Summer work shoe shopping has begun.</p>
                      <p className="text-sm text-gray-600">(9% OR)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Click-Through Rate */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Click-Through Rate (CTR)/ Click-to-Open Rate (CToR)</h3>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What It Means:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CTR:</strong> The percentage of delivered emails where recipients clicked on links.</li>
                <li><strong>CToR:</strong> Of people who opened the email, what percentage clicked on something</li>
              </ul>
            </div>

            <div className="space-y-8">
              {/* Email Content */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Email Content</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Expectation Match:</strong> Content delivers on subject line/preheader promise.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Urgency:</strong> Time-sensitive offers or deadlines, upcoming events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Value Proposition:</strong> Clear benefit for clicking. Problem user has and solution we are offering.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Compelling Copy:</strong> Persuasive, benefit-focused writing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Trust Elements:</strong> Testimonials, certifications, guarantees.</span>
                  </li>
                </ul>
              </div>

              {/* Call-to-Action */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Call-to-Action (CTA)</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Buttons:</strong> The text should be clear, action-oriented ("Shop Now", "Get Started"). They should be prominent and easy to spot at a glance, with multiple locations for easy/immediate action.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Multiple Options:</strong> Different ways to engage (phone, email, website link).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Clarity:</strong> Obvious what happens when clicked and what actions will be needed from the user.</span>
                  </li>
                </ul>
              </div>

              {/* Targeting */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Targeting</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Audience Relevance:</strong> Knowing the audience and relating the message to them.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>List Size:</strong> Ideal range is between 2000-5000 contacts. Up to 15,000.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Segmentation:</strong> Tailored content for specific groups broken into lists.</span>
                  </li>
                </ul>
              </div>

              {/* Design */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Design</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Spacing:</strong> Makes good use of the top half of the email to hook users.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Visual Hierarchy:</strong> Easy to scan and read. (67% of SG users fully read emails as opposed to skimming.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Mobile Optimization:</strong> Works on all devices. ~50% of users prefer mobile.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 mt-8 border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Findings</h4>
              </div>
              <p className="text-gray-700">
                There are several factors that affect interaction within an email. Copy designed to appeal to the user's needs, focuses on benefits and provides direct and easy to understand communication normally results in greater interactions.
              </p>
            </div>
          </div>

          {/* Opt-Out Rate */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Opt-Out Rate (0.21%)</h3>
            <p className="text-lg text-gray-600 mb-6">The percentage of recipients who unsubscribe after receiving an email.</p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What Affects It:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Content Relevance:</strong> Emails that don't match subscriber interests</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Frequency:</strong> Too many emails can lead to fatigue</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Expectation Mismatch:</strong> Content differs from what was promised at signup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Case Study: Gulfstream Subsidy Email</h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Let's look at an example of an email built to closely follow a "successful" template, based on our findings so far.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              First, the list is segmented. Broken up by location with size below 5000 contacts per list. There were 12 email versions in total for Gulfstream, and they all performed well.
            </p>

            {/* Subject Line Section */}
            <div className="mb-12">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Subject Line</h3>
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <p className="text-lg font-medium text-gray-800">Savannah: There's a new way to get your safety shoes.</p>
                  <p className="text-sm text-gray-600 mt-2">(Super simple, location name, direct benefit)</p>
                </div>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => scrollToNext('email-section-1')}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronDown size={24} />
                </button>
              </div>
            </div>

            {/* Email Section 1 */}
            <div id="email-section-1" className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                    <img 
                      src="https://www2.srmax.com/l/69142/2025-09-03/lzm8nx/69142/1756921854B6GSrj6T/gulfstream_email_section_1.png" 
                      alt="Gulfstream Email Section 1" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed">
                    Immediately addresses key selling point and reinforces SL. A new way to get shoes was the reason they opened and here is the info they need.
                    It provides context, value prop and credibility to the brand within the eyeline.
                    Finally, that clear indicator of benefit with the money sign to grab attention. Basically forces you to scroll down.
                  </p>
                </div>
              </div>
              <div className="text-center mt-6">
                <button 
                  onClick={() => scrollToNext('email-section-2')}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronDown size={24} />
                </button>
              </div>
            </div>

            {/* Email Section 2 */}
            <div id="email-section-2" className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                    <img 
                      src="https://www2.srmax.com/l/69142/2025-09-03/lzm8nt/69142/1756921854zR7uz47f/gulfstream_email_section_2.png" 
                      alt="Gulfstream Email Section 2" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed">
                    Second section continues to support the original topic and message through answering common questions the user might have and providing clear and direct answers and communication. How much money do I get? How often and when? 
                    How can I use it? - A great example of providing multiple avenues for the user.
                  </p>
                </div>
              </div>
              <div className="text-center mt-6">
                <button 
                  onClick={() => scrollToNext('email-section-3')}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronDown size={24} />
                </button>
              </div>
            </div>

            {/* Email Section 3 */}
            <div id="email-section-3" className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                    <img 
                      src="https://www2.srmax.com/l/69142/2025-09-03/lzm8nq/69142/17569218545InOtuLJ/gulfstream_email_section_3.png" 
                      alt="Gulfstream Email Section 3" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed">
                    Finally, we offer additional resources and contacts at the bottom. Note there is no CTA at the bottom of the page. They have been focused towards the top and the corresponding actions needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-orange-500 text-white rounded-xl p-8 text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">The Results</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">36.3%</div>
                  <div className="text-lg">Open Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">46.2%</div>
                  <div className="text-lg">Click Through Rate</div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Conclusion</h4>
              </div>
              <p className="text-gray-700">
                While this singular email is an outlier in performance, it shows the improvements that can be made to smooth out the performance curve further towards the positive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section id="next-steps" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Next Steps</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Short Term */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-orange-800 mb-6">Short Term</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Work closely with copy and design to implement the key factors the data is supporting and testing the results.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Improve audience segmentation habits during campaign building/brief.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Implement A/B testing and list separation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div className="text-gray-700">
                    <a 
                      href="https://notebooklm.google.com/notebook/0a570834-4629-49be-bbb0-c7f3a4dfea76?authuser=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
                    >
                      Copy Assistant
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Long Term */}
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-2xl font-semibold text-orange-800 mb-6">Long Term</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Dynamic Content Generation</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Automated image insertion from Salesforce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Template-based multi-brand email creation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Consistent Content Strategy</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">SG drip campaign revamp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Regular new contact nurture emails</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;