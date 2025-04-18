
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Plus, ChevronDown, CodeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <CodeIcon className="h-10 w-10 text-kodehub-purple" />
            <span className="text-xl font-bold ml-2 text-foreground">KodeHub</span>
          </Link>
          
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Enterprise</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-center max-w-lg">
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search repositories..."
              className="w-full pl-8 bg-secondary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell size={20} />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Plus size={16} />
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>New repository</DropdownMenuItem>
              <DropdownMenuItem>Import repository</DropdownMenuItem>
              <DropdownMenuItem>New organization</DropdownMenuItem>
              <DropdownMenuItem>New issue</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Your profile</DropdownMenuItem>
              <DropdownMenuItem>Your repositories</DropdownMenuItem>
              <DropdownMenuItem>Your organizations</DropdownMenuItem>
              <DropdownMenuItem>Your projects</DropdownMenuItem>
              <DropdownMenuItem>Your stars</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
