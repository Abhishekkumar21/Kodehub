import { CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <CodeIcon className="h-10 w-10 text-kodehub-purple" />
              <span className="text-lg font-bold ml-2 text-foreground">KodeHub</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Making the world a better place through collaborative code.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Enterprise</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Customer stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Community Forum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} KodeHub Inc.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Security</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Status</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
