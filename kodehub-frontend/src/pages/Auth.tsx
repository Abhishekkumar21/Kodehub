import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';

function Auth(){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('login');

    useEffect(() => {
      if(location.state?.tab == 'signup') {
        setActiveTab('signup');
      }
    }, [location.state])

    return (
            <div className="flex min-h-screen flex-col bg-background">
              <div className="container max-w-lg mx-auto px-4 py-10">
                <div className="mb-8">
                  <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to home
                  </Link>
                </div>
        
                <div className="flex justify-center mb-8">
                  <Link to="/" className="flex items-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-8 h-8 text-kodehub-purple" 
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <span className="text-xl font-bold ml-2 text-foreground">KodeHub</span>
                  </Link>
                </div>
        
                <Tabs defaultValue="login"
                      value = {activeTab}
                      onValueChange={setActiveTab}
                      className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <LoginForm/>
                  </TabsContent>
                  
                  <TabsContent value="signup">
                    <SignupForm/>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          );
        };
        
        export default Auth;