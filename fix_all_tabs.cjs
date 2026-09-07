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

  // Check if it has a grid in the "What We Deliver" section instead of Tabs
  if (content.includes('<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">') && !content.includes('<TabsList')) {
    console.log(`${page} has a grid! Replacing with Tabs...`);
    
    // Find the What We Deliver section's grid. 
    // Wait, the page has TWO grids! One for "What We Deliver" and one for "Key Benefits"!
    // The "What We Deliver" grid is the FIRST one after the "What We Deliver" heading.
    // Let's use a more specific regex. We know the grid is right after the "text-slate-600 font-medium" paragraph in the "What We Deliver" section.
    
    // Let's split the file by Key Benefits to only target the first part
    const parts = content.split('Key Benefits Section');
    if (parts.length === 2) {
      let firstPart = parts[0];
      
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
      firstPart = firstPart.replace(gridRegex, tabsReplacement);
      content = firstPart + 'Key Benefits Section' + parts[1];
      
      // Make sure Tabs are imported
      if (!content.includes('import { Tabs')) {
        content = content.replace(
          "import Layout from '@/components/layout/Layout';",
          "import { Tabs, TabsContent, TabsList, TabsTrigger } from \"@/components/ui/tabs\";\nimport Layout from '@/components/layout/Layout';"
        );
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Successfully fixed Tabs in ${page}`);
    }
  } else {
    console.log(`${page} already has Tabs or no grid found.`);
  }
});
