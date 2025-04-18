import { Users, Code, GitPullRequest, Shield } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Code Hosting",
    description: "Host and share your code repositories with version control, code review, and collaboration tools."
  },
  {
    icon: <GitPullRequest className="h-8 w-8" />,
    title: "Pull Requests",
    description: "Propose changes, discuss implementations, and collaborate on code with integrated code review."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with teams of any size through organizations, permissions, and discussions."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security",
    description: "Keep your code secure with vulnerability scanning, dependency updates, and access controls."
  }
];

const FeaturesSection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Powerful features for developers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          KodeHub provides all the tools you need to build amazing things with collaboration at the core.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:border-primary/40">
            <div className="text-kodehub-purple mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
