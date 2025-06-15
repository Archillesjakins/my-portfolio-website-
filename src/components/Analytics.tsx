import { BarChart3, Users, Eye, Download, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const stats = [
    {
      label: "Total Views",
      value: "12,847",
      change: "+23%",
      trend: "up",
      icon: Eye,
      color: "from-blue-500 to-blue-600"
    },
    {
      label: "Unique Visitors",
      value: "3,492",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      label: "Project Views",
      value: "8,231",
      change: "+31%",
      trend: "up",
      icon: BarChart3,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      label: "Resume Downloads",
      value: "456",
      change: "+12%",
      trend: "up",
      icon: Download,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const topCountries = [
    { country: "United States", visits: 4892, percentage: 38 },
    { country: "United Kingdom", visits: 2341, percentage: 18 },
    { country: "Germany", visits: 1876, percentage: 15 },
    { country: "Ghana", visits: 1234, percentage: 10 },
    { country: "Canada", visits: 987, percentage: 8 }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Portfolio Analytics</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Real-time insights into portfolio performance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visitor Locations */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Top Visitor Locations
            </h3>
            <div className="space-y-6">
              {topCountries.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{index === 0 ? '🇺🇸' : index === 1 ? '🇬🇧' : index === 2 ? '🇩🇪' : index === 3 ? '🇬🇭' : '🇨🇦'}</div>
                    <div>
                      <div className="text-white font-medium">{item.country}</div>
                      <div className="text-gray-400 text-sm">{item.visits.toLocaleString()} visits</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-sm w-8">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              Recent Activity
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Project viewed</div>
                  <div className="text-gray-400 text-sm">ArchieAI React - 2 minutes ago</div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Resume downloaded</div>
                  <div className="text-gray-400 text-sm">From Germany - 5 minutes ago</div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Contact form submitted</div>
                  <div className="text-gray-400 text-sm">New inquiry - 12 minutes ago</div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Blog post viewed</div>
                  <div className="text-gray-400 text-sm">LLM Article - 18 minutes ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
