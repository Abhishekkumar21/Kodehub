import { Button } from '@/components/ui/button';
import { CodeIcon, StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/auth', {state : {tab: 'signup'}})
  }
  return (
    <div className="bg-gradient-to-b from-secondary to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-kodehub-purple/20 p-3 rounded-full">
            <CodeIcon className="h-10 w-10 text-kodehub-purple" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Where code comes to life
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover, share, and collaborate on code with over 100 million developers worldwide on the largest platform for open-source development.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-kodehub-purple hover:bg-kodehub-purple/90 text-white px-8 py-6 h-auto"
                   onClick={handleSignup}>
            Sign up for KodeHub
          </Button>
          <Button variant="outline" className="bg-transparent border-kodehub-purple text-kodehub-purple hover:bg-kodehub-purple/10 px-8 py-6 h-auto">
            <StarIcon className="mr-2 h-5 w-5" />
            Star on KodeHub
          </Button>
        </div>
        
        <div className="mt-12 bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto overflow-hidden shadow-lg">
          <pre className="text-left overflow-x-auto">
            <code className="font-fira-code text-sm">
              <span className="text-kodehub-teal"># Clone the repository</span>
              <br />
              <span className="text-foreground">git clone https://kodehub.com/example/repo.git</span>
              <br /><br />
              <span className="text-kodehub-teal"># Navigate to the project directory</span>
              <br />
              <span className="text-foreground">cd repo</span>
              <br /><br />
              <span className="text-kodehub-teal"># Create a new branch</span>
              <br />
              <span className="text-foreground">git checkout -b feature</span>
              <br /><br />
              <span className="text-kodehub-teal"># Make changes and commit</span>
              <br />
              <span className="text-foreground">git commit -am "Add new feature"</span>
              <br /><br />
              <span className="text-kodehub-teal"># Push to KodeHub</span>
              <br />
              <span className="text-foreground">git push origin feature</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;
