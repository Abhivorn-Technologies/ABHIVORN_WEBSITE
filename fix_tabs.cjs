const fs = require('fs');
const path = require('path');

const pages = [
  'CustomSoftware.tsx',
  'HRMSSoftware.tsx',
  'AIDevelopment.tsx',
  'WebDevelopmentHyderabad.tsx',
  'MobileAppDevelopment.tsx',
  'HealthcareSoftware.tsx'
];

pages.forEach(page => {
  const filePath = path.join(__dirname, 'src/pages', page);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix the broken Hero section (where <Tabs> replaced the button wrapper)
  if (content.includes('</p>\n              <Tabs defaultValue={deliverables[0].id} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-[400px]">')) {
    content = content.replace(
      '</p>\n              <Tabs defaultValue={deliverables[0].id} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-[400px]">',
      '</p>\n              <div className="flex flex-col sm:flex-row gap-4">'
    );
  }

  // 2. Ensure the "What We Deliver" Tabs has items-start
  // Find the Tabs component that follows "What We Deliver"
  const tabsRegex = /<Tabs defaultValue=\{deliverables\[0\]\.id\} className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-\[400px\]">/g;
  content = content.replace(tabsRegex, '<Tabs defaultValue={deliverables[0].id} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-[400px]">');

  // 3. Just in case CustomSoftware.tsx has a grid instead of Tabs, let's check
  if (page === 'CustomSoftware.tsx' && content.includes('<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">') && !content.includes('<TabsList')) {
    // We need to replace the grid with Tabs
    console.log(`CustomSoftware.tsx has a grid! Replacing with Tabs...`);
    const gridRegex = /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">[\s\S]*?(?=<\/section>)/;
    const tabsReplacement = `
          <Tabs defaultValue={deliverables[0].id} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-[400px]">
            <TabsList className="flex lg:flex-col justify-start h-auto bg-transparent gap-3 w-full lg:w-[35%] overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide rounded-none border-none">
              {deliverables.map((item) => (
                <TabsTrigger 
                  key={item.id} 
                  value={item.id}
                  className="w-full text-left justify-start px-6 py-5 rounded-2xl bg-white text-slate-500 font-bold text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 border border-slate-200 data-[state=active]:border-primary shadow-sm data-[state=active]:shadow-md whitespace-nowrap lg:whitespace-normal"
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="w-full lg:w-[65%]">
              {deliverables.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id}
                  className="bg-white text-slate-900 rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 m-0 animate-in fade-in slide-in-from-right-4 duration-500 focus-visible:outline-none"
                >
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    {item.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                        <span className="font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      `;
    content = content.replace(gridRegex, tabsReplacement);
    
    // Make sure Tabs are imported
    if (!content.includes('import { Tabs')) {
      content = content.replace(
        "import Layout from '@/components/layout/Layout';",
        "import { Tabs, TabsContent, TabsList, TabsTrigger } from \"@/components/ui/tabs\";\nimport Layout from '@/components/layout/Layout';"
      );
    }
  }

  // Also make sure the background is light
  content = content.replace(
    /<section className="py-24 bg-slate-900 text-white relative overflow-hidden">/g,
    '<section className="py-24 bg-primary/5 text-slate-900 relative overflow-hidden">'
  );
  content = content.replace(
    /<h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-white uppercase">/g,
    '<h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-slate-900 uppercase">'
  );
  content = content.replace(
    /<p className="text-lg text-slate-300 font-medium">/g,
    '<p className="text-lg text-slate-600 font-medium">'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${page}`);
});
